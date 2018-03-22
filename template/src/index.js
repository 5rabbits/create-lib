import React from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-polyglot'
import baseTranslations from 'locale'
import deepmerge from 'deepmerge'
import App from 'App'

const {{= it.componentName }} = ({ locale, translations, ...otherProps }) => {
  const messages = deepmerge(baseTranslations, translations || {})
  let validLocale = locale

  if (!messages[locale]) {
    // eslint-disable-next-line no-console
    console.warning(
      `{{= it.packageName }}: Translations not found for locale "${locale}".`
    )
    validLocale = 'en'
  }

  return (
    <I18n locale={validLocale} messages={messages[validLocale]}>
      <App {...otherProps} />
    </I18n>
  )
}

{{= it.componentName }}.propTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object,
}

{{= it.componentName }}.defaultProps = {
  locale: 'en',
}

export default {{= it.componentName }}
