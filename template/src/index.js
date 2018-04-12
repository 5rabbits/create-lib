import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from 'components/I18nProvider'
import {{= it.componentName }} from 'components/{{= it.componentName }}'

const {{= it.componentName }}Wrapper = ({ locale, translations, ...otherProps }) => (
  <I18nProvider locale={locale} translations={translations}>
    <{{= it.componentName }} {...otherProps} />
  </I18nProvider>
)

{{= it.componentName }}Wrapper.propTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object,
}

{{= it.componentName }}Wrapper.defaultProps = {
  locale: 'en',
}

export default {{= it.componentName }}Wrapper
