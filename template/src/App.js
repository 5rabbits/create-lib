import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-polyglot'
import css from './App.css'

const App = ({ onClick, t }) => (
  <button className={css['my-library']} onClick={onClick} type="button">
    {t('clickHere')}
  </button>
)

App.propTypes = {
  onClick: PropTypes.func,
  t: PropTypes.func,
}

export default translate()(App)
