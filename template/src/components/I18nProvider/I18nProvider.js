import React from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-polyglot'
import baseTranslations from 'locale'
import deepmerge from 'deepmerge'

const I18nProvider = ({ children, locale, translations }) => {
  const messages = deepmerge(baseTranslations, translations || {})
  let validLocale = locale

  if (!messages[locale]) {
    // eslint-disable-next-line no-console
    console.warn(
      `{{= it.packageName }}: Translations not found for locale "${locale}".`
    )
    validLocale = 'en'
  }

  return (
    <I18n locale={validLocale} messages={messages[validLocale]}>
      {children}
    </I18n>
  )
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  translations: PropTypes.object,
}

export default I18nProvider
