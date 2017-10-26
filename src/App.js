import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      users: []
    }
  }

  componentDidMount() {
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      for (let user in users) {
          console.log('user: ', users[user]);
      }
    })
  }

  updateState(key, event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const usersRef = firebase.database().ref('users');
    const user = {
      name: this.state.name,
      email: this.state.email
    }
    usersRef.push(user);

    this.setState({
      name: '',
      email: ''
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type='text' placeholder='name' value={this.state.name} onChange={(event)=>this.updateState('name', event)}/>
        <input type='text' placeholder='email' value={this.state.email} onChange={(event)=>this.updateState('email', event)} />
        <button onClick={(event)=> this.handleSubmit(event)}>Submit</button>
      </div>
    );
  }
}

export default App;
