import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import readme from '../readme.md'
import <%= componentName %> from '../dist/<%= libraryName %>'
import '../dist/<%= libraryName %>.css'

storiesOf('<%= componentName %>', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add('with onClick handler', () => (
    <<%= componentName %>
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
      theme={select(
        'Theme',
        {
          default: 'Default',
          primary: 'Primary',
        },
        'default'
      )}
    />
  ))
