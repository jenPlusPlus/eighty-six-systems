import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AddUser from './../AddUser/AddUser';
import Login from './../Login/Login';
// import firebase from './../../firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Route exact path='/' render={() => {
            return (
              <header className="App-header">
                <h1 className="App-title">eighty-six</h1>
              </header>
            );
          }}/>

          <Route exact path='/adduser' render={() => {
            return (
              <div className="AddUser-wrapper">
                <header className="App-header">
                  <h1 className="App-title">eighty-six</h1>
                </header>
                <AddUser />
              </div>
            );
          }}/>

          <Route exact path='/login' component={Login}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
