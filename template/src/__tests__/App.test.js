import React from 'react'
import { shallow } from 'test-helper'
import App from '../App'

describe(App, () => {
  it('should display "Click here" text', () => {
    const component = shallow(<App />)

    expect(component).toHaveText('Click here')
  })
})
