#!/usr/bin/env node

const program = require('commander')
const dot = require('dot')
const fs = require('fs-extra')
const path = require('path')
const camelCase = require('uppercamelcase')
const readDir = require('recursive-readdir')
const validateNpmPackageName = require('validate-npm-package-name')
const chalk = require('chalk')
const ora = require('ora')
const pkg = require('./package.json')
const exec = require('child_process').exec

dot.templateSettings.strip = false

const spinner = ora()
const organization = '5rabbits' // Maybe this could be configurable
const originalCwd = process.cwd()
let libraryName
let packageName
let componentName
let repository
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

function validateName(name) {
  const validation = validateNpmPackageName(name)

  if (validation.errors) {
    console.error(chalk.red('Project name can only contain URL-friendly characters'))
    process.exit(1)
  }
}

function createProject(name) {
  console.log(`${chalk.yellow('@5rabbits/create-lib')} v${pkg.version}\n`)

  validateName(name)

  libraryName = name
  packageName = `@${organization}/${libraryName}`
  componentName = camelCase(libraryName)
  repository = `${organization}/${libraryName}`
  templatePath = path.resolve(__dirname, 'template')
  projectCwd = path.join(process.cwd(), libraryName)

  createProjectFiles()
    .then(createGitRepo)
    .then(installDependencies)
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
  return filePath.replace(/_COMPONENT_/g, componentName)
}
