# {{= it.packageName }} [![npm](https://img.shields.io/npm/v/@{{= it.organization }}/{{= it.libraryName }}.svg?style=flat-square)](https://www.npmjs.com/package/@{{= it.organization }}/{{= it.libraryName }}) [![Travis](https://img.shields.io/travis/{{= it.organization }}/{{= it.libraryName }}.svg?style=flat-square)](https://travis-ci.org/{{= it.organization }}/{{= it.libraryName }}) [![Codecov](https://img.shields.io/codecov/c/github/{{= it.organization }}/{{= it.libraryName }}.svg?style=flat-square)](https://codecov.io/gh/{{= it.organization }}/{{= it.libraryName }})

*TODO:* Add a short description for your library. It should probably match the field `description` on the `package.json` file.

## Usage

* Install with `yarn add {{= it.packageName }}`.
* Install peer dependencies (if you haven't already) `yarn add react@^16.0.0 react-dom@^16.0.0`. React 15 is also supported.
* Use the component:

```es6
import {{= it.componentName }} from '{{= it.packageName }}'

<{{= it.componentName }} />
```

[Demo](https://{{= it.organization }}.github.io/{{= it.libraryName }})

## Props

| prop       | type   | default | required | description       |
| :--------- | :----- | :------ | :------- | :---------------- |
| someProp   | string |         | yes      | Prop description. |
| otherProps | number |         |          | Prop description. |

## Development

* Run `yarn start` to start building the library in watch mode.
* Write [stories](https://storybook.js.org) in the `stories/index.js` file.
* Run `yarn publish` to release a new version.

This project [lints](https://eslint.org/) and [prettifies](https://prettier.io) source files automatically before commiting.
