import React from 'react'
import { shallow } from 'test-helper'
import App from '../App'

describe(App, () => {
  it('should display "Click here" text', () => {
    const component = shallow(<App />)

    expect(component).toHaveText('Click here')
  })

  describe('props.className', () => {
    it('should assign the specified className', () => {
      const component = shallow(<App className="some-classname" />)

      expect(component.find('button')).toHaveClassName('some-classname')
    })
  })

  describe('props.theme', () => {
    it('should assign a className for the specified theme', () => {
      const component = shallow(<App theme="primary" />)

      expect(component.find('button')).toHaveClassName('theme--primary')
    })
  })
})
