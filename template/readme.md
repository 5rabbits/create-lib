# {{= it.packageName }}

## Development

### Requirements

* **NodeJS LTS**

  If you have [nvm](https://github.com/creationix/nvm) installed and [integrated into your shell](https://github.com/creationix/nvm#deeper-shell-integration), it will automatically install the latests LTS version available whenever you enter the project directory.

* **Yarn >= 1.0**

  This project uses [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to handle multiple interconnected packages at once.

### Packages

This project consist on three packages that works together during development:

#### lib

The React component that other projects can use.

Commands:

```shell
# Builds the package
$ yarn build

# Builds the package in watch mode
$ yarn start
```

#### example

An example app integration to use during development. It will hot reload any changes made to the library.

Commands:

```shell
# Starts the development application at http://127.0.0.1:3000
#
# - PORT: (3000 by default) the port that the example application will use.
#
$ yarn start
```

### Setup

* Clone this repository and `cd` to the root of the project.

* Install dependencies.

  ```shell
  $ yarn install
  ```

* Start all the packages.

  ```shell
  $ yarn start
  ```

  This will simultaneously run `yarn start` in all packages.
