import React, { Component } from 'react';
import AccountPage from './components/accountPage/AccountPage';
import NavTop from './components/navTop/NavTop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavTop/>
      <AccountPage/>
      </div>
    );
  }
}

export default App;
