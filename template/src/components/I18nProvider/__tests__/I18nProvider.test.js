import React from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import { translate } from 'react-polyglot'
import I18nProvider from '../I18nProvider'

describe(I18nProvider, () => {
  @translate()
  class TestComponent extends React.Component {
    static propTypes = {
      t: PropTypes.func.isRequired,
    }

    render() {
      return <span>{this.props.t('helloWorld')}</span>
    }
  }

  it('should pass the `t` function', () => {
    const component = mount(
      <I18nProvider
        locale="fr"
        translations={{
          fr: {
            helloWorld: 'Bonjour monde',
          },
        }}
      >
        <TestComponent />
      </I18nProvider>
    )

    expect(component.find('span')).toHaveText('Bonjour monde')
  })

  describe("if the locale doesn't have translations", () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      // eslint-disable-next-line no-console
      console.warn.mockRestore()
    })

    it('should warn', () => {
      shallow(
        <I18nProvider locale="fr">
          <TestComponent />
        </I18nProvider>
      )

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        `<%= packageName %>: Translations not found for locale "fr".`
      )
    })

    it('should fallback to "en" locale', () => {
      const component = mount(
        <I18nProvider
          locale="fr"
          translations={{
            en: {
              helloWorld: 'Hello world',
            },
          }}
        >
          <TestComponent />
        </I18nProvider>
      )

      expect(component.find('span')).toHaveText('Hello world')
    })
  })
})
