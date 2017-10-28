import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AddUser from './../AddUser/AddUser';
// import firebase from './../../firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // const usersRef = firebase.database().ref('users');
    // usersRef.on('value', (snapshot) => {
    //   let users = snapshot.val();
    //   for (let user in users) {
    //       console.log('user: ', users[user]);
    //   }
    // })
  }

  // updateState(key, event) {
  //   this.setState({[key]: event.target.value})
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const usersRef = firebase.database().ref('users');
  //   const user = {
  //     name: this.state.name,
  //     email: this.state.email
  //   }
  //   usersRef.push(user);
  //
  //   this.setState({
  //     name: '',
  //     email: ''
  //   });
  // }


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

          <Route exact path='/login'
            render={() => {
              return (
                <div>
                  <h2 className="login-header">Login</h2>
                </div>
              );
            }}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
