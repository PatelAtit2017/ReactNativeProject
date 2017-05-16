/* @flow */

import React from 'react'
import { Router } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import createStore from '@store/create'
import App from './router'

const store = createStore()

const Kernel = (): React$Element<any> => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Kernel
