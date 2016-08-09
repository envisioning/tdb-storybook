import React, { Component } from 'react';
import MyComponent from '../MyComponent'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}
