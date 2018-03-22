import React from 'react'
import PropTypes from 'prop-types'
import css from './{{= it.componentName }}.css'

const {{= it.componentName }} = ({ onClick }) => (
  <button className={css['my-library']} onClick={onClick} type="button">
    Click me
  </button>
)

{{= it.componentName }}.propTypes = {
  onClick: PropTypes.func,
}

export default {{= it.componentName }}
