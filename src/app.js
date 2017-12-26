import React, { Component } from 'react';

import Counter from './components/Counter';
import logo from './assets/logo.svg';
import './styles/app.css';


export default class App extends Component {
  render = () => (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        Meanwhile, you can play with the counter below.
      </p>
      <Counter />
    </div>
  )
}
