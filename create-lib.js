#!/usr/bin/env node

const program = require('commander')
const pkg = require('./package.json')

let libraryName

program
  .version(pkg.version)
  .arguments('<library-name>')
  .action(name => {
    libraryName = name
  })

program.parse(process.argv)

if (!libraryName) {
  program.help()
}
