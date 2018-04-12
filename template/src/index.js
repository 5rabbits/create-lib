import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from 'components/I18nProvider'
import <%= componentName %> from 'components/<%= componentName %>'

const <%= componentName %>Wrapper = ({ locale, translations, ...otherProps }) => (
  <I18nProvider locale={locale} translations={translations}>
    <<%= componentName %> {...otherProps} />
  </I18nProvider>
)

<%= componentName %>Wrapper.propTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object,
}

<%= componentName %>Wrapper.defaultProps = {
  locale: 'en',
}

export default <%= componentName %>Wrapper
