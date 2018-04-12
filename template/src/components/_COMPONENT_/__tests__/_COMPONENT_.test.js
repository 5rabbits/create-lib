import React from 'react'
import { shallow } from 'tests/test-helper'
import <%= componentName %> from '../<%= componentName %>'

describe(<%= componentName %>, () => {
  it('should display "Click here" text', () => {
    const component = shallow(<<%= componentName %> />)

    expect(component).toHaveText('Click here')
  })

  describe('props.className', () => {
    it('should assign the specified className', () => {
      const component = shallow(<<%= componentName %> className="some-classname" />)

      expect(component.find('button')).toHaveClassName('some-classname')
    })
  })

  describe('props.theme', () => {
    it('should assign a className for the specified theme', () => {
      const component = shallow(<<%= componentName %> theme="primary" />)

      expect(component.find('button')).toHaveClassName('theme--primary')
    })
  })
})
