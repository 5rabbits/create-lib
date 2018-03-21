#!/usr/bin/env node

const program = require('commander')
const dot = require('dot')
const fs = require('fs-extra')
const path = require('path')
const camelCase = require('uppercamelcase')
const readDir = require('recursive-readdir')
const validateNpmPackageName = require('validate-npm-package-name')
const pkg = require('./package.json')

dot.templateSettings.strip = false

let libraryName
let packageName
let componentName

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
    console.error(validation.errors.join("\n"))
    process.exit(1)
  }
}

function createProject(name) {
  validateName(name)

  // Maybe this could be configurable
  const organization = '5rabbits'

  libraryName = name
  packageName = `@${organization}/${libraryName}`
  componentName = camelCase(libraryName)

  const templateValues = {
    libraryName,
    packageName,
    componentName,
    organization,
  }

  const templatePath = path.resolve(__dirname, 'template')
  const projectCwd = path.join(process.cwd(), libraryName)

  readDir(templatePath, (err, files) => {
    files.forEach(file => {
      const filePath = file.replace(templatePath, '')
      const fileContents = fs.readFileSync(file)

      fs.outputFileSync(
        path.join(projectCwd, evaluateFilePath(filePath)),
        dot.template(fileContents)(templateValues)
      )
    })
  })
}

function evaluateFilePath(filePath) {
  return filePath.replace(/_COMPONENT_/g, componentName)
}
