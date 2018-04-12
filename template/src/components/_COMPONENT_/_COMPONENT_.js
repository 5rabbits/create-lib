import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-polyglot'
import classNames from 'classnames'
import css from './{{= it.componentName }}.css'

const {{= it.componentName }} = ({ className, t, theme, ...otherProps }) => (
  <button
    className={classNames(css['my-library'], css[`theme--${theme}`], className)}
    type="button"
    {...otherProps}
  >
    {t('clickHere')}
  </button>
)

{{= it.componentName }}.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'primary']),
}

{{= it.componentName }}.defaultProps = {
  theme: 'default',
}

export default translate()({{= it.componentName }})
