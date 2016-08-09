import React, { Component } from 'react';
import MyComponent from '../MyComponent'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../../styles/main.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}
