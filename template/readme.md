# {{= it.packageName }} [![npm](https://img.shields.io/npm/v/{{= it.packageName }}.svg?style=flat-square)](https://www.npmjs.com/package/{{= it.packageName }}) [![Travis](https://img.shields.io/travis/{{= it.repository }}.svg?style=flat-square)](https://travis-ci.org/{{= it.repository }}) [![Codecov](https://img.shields.io/codecov/c/repository/{{= it.repository }}.svg?style=flat-square)](https://codecov.io/gh/{{= it.repository }})

_TODO:_ Add a short description for your library. It should probably match the field `description` on the `package.json` file.

## Usage

* Install with `yarn add {{= it.packageName }}`.
* Install peer dependencies (if you haven't already) `yarn add react@^16.0.0 react-dom@^16.0.0`. React 15 is also supported.
* Use the component:

```es6
import {{= it.componentName }} from '{{= it.packageName }}'
import '{{= it.packageName }}/dist/{{= it.libraryName }}.css'

<{{= it.componentName }} />
```

[Demo](https://{{= it.repositoryUser }}.github.io/{{= it.repositoryName }})

## Props

| prop         | type                     | default     | required | description                                                                                                                                                                                       |
| :----------- | :----------------------- | :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| theme        | `'default'`, `'primary'` | `'default'` |          | Button theme.                                                                                                                                                                                     |
| locale       | string                   | `'en'`      |          | Language to display the component. `en` and `es` are supported by default, but you can add other languages using the `translations` prop.                                                         |
| translations | object                   |             |          | Extra locales for the component. Use [this file](https://github.com/{{= it.repository }}/blob/master/src/locale/en.js) as a template and pass the translations as `{ [locale]: [translations] }`. |

## Development

* Run `yarn start` to start building the library in watch mode.
* Write [stories](https://storybook.js.org) in the `stories/index.js` file.
* This project [lints](https://eslint.org/) and [prettifies](https://prettier.io) source files automatically before commiting. You can run `yarn lint` and `yarn prettify` to do this operations manually before commiting (although you shouldn't need to).

## Testing

* Execute `yarn test` to run the test with [jest](https://facebook.github.io/jest/). Use `yarn test --watch` to run the tests in watch mode.
* After every run (even in watch mode), a summary coverage report will be displayed directly on the terminal and a full html report will be generated in `tests/coverage`.

## Publishing

* Run `yarn publish` to release a new version.
* Before publishing the library will be automatically built. You can manually build for production using `yarn build`.
* After publishing the stories will be automatically deployed to [github pages](https://{{= it.repositoryUser }}.github.io/{{= it.repositoryName }}). You can manually deploy the stories using `yarn deploy-storybook`.

## More info

Read [@5rabbits/create-react-lib's wiki](https://github.com/5rabbits/create-react-lib/wiki) for extra information and advanced usage.
