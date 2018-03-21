import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from '../readme.md'
import {{= it.componentName }} from '../dist/{{= it.libraryName }}'

storiesOf('{{= it.componentName }}', module)
  .addDecorator(withReadme([readme]))
  .add('without props', () => <{{= it.componentName }} />)
