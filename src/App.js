import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import './index.css';
import Today from './components/today/today';
import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store = {store}>
        <Today />
        </Provider>
      </div>
    );
  }
}

export default App;