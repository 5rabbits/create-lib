# {{= it.packageName }}

## Usage

* Install with `yarn add {{= it.packageName }}`.
* Install peer dependencies (if you haven't already) `yarn add react@^16.0.0 react-dom@^16.0.0`. React 15 is also supported.
* Use the component:

```es6
import {{= it.componentName }} from '{{= it.packageName }}'

<{{= it.componentName }}
  someProp="test"
/>
```

## Props

| prop       | type   | default | required | description       |
| :--------- | :----- | :------ | :------- | :---------------- |
| someProp   | string |         | yes      | Prop description. |
| otherProps | number |         |          | Prop description. |
