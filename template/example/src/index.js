import React from 'react'
import ReactDOM from 'react-dom'
import {{= it.componentName }} from '{{= it.packageName }}'
import './index.css'

ReactDOM.render(<{{= it.componentName }} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
