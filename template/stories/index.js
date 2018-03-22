import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withReadme } from 'storybook-readme'
import readme from '../readme.md'
import {{= it.componentName }} from '../dist/{{= it.libraryName }}'
import '../dist/{{= it.libraryName }}.css'

storiesOf('{{= it.componentName }}', module)
  .addDecorator(withReadme([readme]))
  .add('with onClick handler', () => (
    <{{= it.componentName }} onClick={action('onClick')} />
  ))
