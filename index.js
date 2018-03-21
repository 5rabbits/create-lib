#!/usr/bin/env node

const program = require('commander')
const dot = require('dot')
const fs = require('fs-extra')
const path = require('path')
const camelCase = require('uppercamelcase')
const readDir = require('recursive-readdir')
const directoryExists = require('directory-exists')
const validateNpmPackageName = require('validate-npm-package-name')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')
const columnify = require('columnify')
const pkg = require('./package.json')
const exec = require('child_process').exec

dot.templateSettings.strip = false

const spinner = ora()
const originalCwd = process.cwd()
let organization
let libraryName
let packageName
let componentName
let repository
let repositoryFull
let repositoryUser
let repositoryName
let templatePath
let projectCwd

program
  .version(pkg.version)
  .arguments('<library-name>')
  .action(name => {
    createProject(name)
  })

program.parse(process.argv)

if (!libraryName) {
  program.help()
}

function validateLibraryName() {
  const validation = validateNpmPackageName(libraryName)

  if (validation.errors) {
    console.error(chalk.red('Project name can only contain URL-friendly characters'))
    process.exit(1)
  }
}

function validateProjectDir() {
  const exists = directoryExists.sync(projectCwd)

  if (exists) {
    console.error(chalk.red(`Folder ${libraryName} already exists`))
    process.exit(1)
  }
}

function createProject(name) {
  console.log('')
  console.log(`${chalk.yellow('@5rabbits/create-lib')} v${pkg.version}\n`)

  libraryName = name
  componentName = camelCase(libraryName)
  projectCwd = path.join(process.cwd(), libraryName)
  templatePath = path.resolve(__dirname, 'template')

  validateLibraryName()
  validateProjectDir()

  inquirer.prompt([
    {
      type: 'input',
      name: 'organization',
      message: 'NPM organization?',
      default: '5rabbits',
      validate: answer => (
        !!validateNpmPackageName(answer).errors
          ? 'Invalid organization name. It should be URL friendly.'
          : true
      )
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Github repository?',
      default: `5rabbits/${name}`,
      validate: answer => (
        answer.split('/').length === 2
          ? true
          : 'Invalid repository name. Should be in format USER/REPOSITORY_NAME.'
      )
    },
  ])
  .then(answers => {
    const repositorySegments = answers.repository.split('/')

    organization = answers.organization
    repository = answers.repository
    packageName = `@${organization}/${libraryName}`
    repositoryUser = repositorySegments[0]
    repositoryName = repositorySegments[1]
    repositoryFull = `https://github.com/${repository}`
  })
  .then(createProjectFiles)
  .then(installDependencies)
  .then(createGitRepo)
  .then(printSuccess)
}

function printSuccess() {
  console.log('')
  console.log(chalk.green(`🦄  Your new project ${chalk.bold(libraryName)} is ready to start!`))
  console.log('')
  console.log(columnify({
    [chalk.bold.yellow('Library name:')]: packageName,
    [chalk.bold.yellow('Repository url:')]: repositoryFull,
  }, {
    showHeaders: false,
  }))
  console.log('')
  console.log(chalk.underline('What now?'))

  console.log('')
  console.log('🤯  Move to the project directory')
  console.log(chalk.cyan(`  $ cd ${libraryName}`))

  console.log('')
  console.log('🤖  Start developing')
  console.log(chalk.cyan('  $ yarn start'))

  console.log('')
  console.log('🐛  Run the tests')
  console.log(chalk.cyan('  $ yarn test --watch'))

  console.log('')
  console.log('🎉  Publish a new version to the world')
  console.log(chalk.cyan('  $ yarn publish'))
  console.log('')

  return Promise.resolve()
}

function installDependencies() {
  spinner.start('Installing dependencies')

  return projectExec('yarn')
    .then(() => spinner.succeed('Dependencies installed'))
}

function createGitRepo() {
  spinner.start('Creating git repo')

  return projectExec('git init')
    .then(() => projectExec('git add .'))
    .then(() => projectExec('git commit -m "Initial commit"'))
    .then(() => projectExec(`git remote add origin git@github.com:${repository}.git`))
    .then(() => spinner.succeed('Git repo initialized'))
}

function createProjectFiles(name) {
  return new Promise(resolve => {
    spinner.start(`Creating project ${chalk.bold(libraryName)}`)

    const templateValues = {
      libraryName,
      packageName,
      componentName,
      organization,
      repository,
      repositoryFull,
      repositoryUser,
      repositoryName,
    }

    readDir(templatePath)
      .then(files => {
        files.forEach(file => {
          const filePath = file.replace(templatePath, '')
          const fileContents = fs.readFileSync(file)

          fs.outputFileSync(
            path.join(projectCwd, evaluateFilePath(filePath)),
            dot.template(fileContents)(templateValues)
          )
        })

        spinner.succeed(`Project ${chalk.bold(libraryName)} created`)
        resolve()
      })
  })
}

function projectExec(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: projectCwd }, function(error, stdout) {
      if (error) {
        reject(error)
      }
      else {
        resolve(stdout)
      }
    })
  })
}

function evaluateFilePath(filePath) {
  return filePath
    .replace(/_COMPONENT_/g, componentName)
    .replace(/_RENAME_/g, '')
}
