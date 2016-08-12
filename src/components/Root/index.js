import React from 'react';
import { Provider } from 'react-redux'
import { AsteroidProvider } from '../subscriptionHOC';

import App from '../App';
import store from '../../store';
import Routes from '../../routes'
import asteroid from '../../asteroid';

const Root = () => {
  return (
    <Provider store={store}>
      <AsteroidProvider asteroid={asteroid}>
        <Routes />
      </AsteroidProvider>
    </Provider>
  )
}


export default Root;
