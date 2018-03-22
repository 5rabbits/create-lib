import React from 'react'
import { shallow } from 'enzyme'
import {{= it.componentName }} from '../{{= it.componentName }}'

describe({{= it.componentName }}, () => {
  it('should render the component name', () => {
    const component = shallow(<{{= it.componentName }} />)

    expect(component).toHaveText('Click me')
  })
})
