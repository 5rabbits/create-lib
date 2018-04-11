import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-polyglot'
import classNames from 'classnames'
import css from './App.css'

const App = ({ className, t, theme, ...otherProps }) => (
  <button
    className={classNames(css['my-library'], css[`theme--${theme}`], className)}
    type="button"
    {...otherProps}
  >
    {t('clickHere')}
  </button>
)

App.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'primary']),
}

App.defaultProps = {
  theme: 'default',
}

export default translate()(App)
