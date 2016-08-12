import React from 'react';
import { Provider } from 'react-redux'
import App from '../App';
import store from '../../store';
import Routes from '../../routes'
const Root = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}


export default Root;
