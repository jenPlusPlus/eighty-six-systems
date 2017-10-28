import React, { Component } from 'react';
// import { Route, BrowserRouter } from 'react-router-dom';
import firebase from './../../firebase.js';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      login_code: ''
    };
  }
  componentDidMount() {
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      for (let user in users) {
        console.log('user: ', users[user]);
      }
    });
  }

  updateState(key, event) {
    this.setState({[key]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const usersRef = firebase.database().ref('users');
    const user = {
      name: this.state.name,
      login_code: this.state.login_code,
      tables: []
    };
    usersRef.push(user);

    this.setState({
      name: '',
      login_code: ''
    });
  }

  render() {
    return (
      <div className="AddUser">
        <input type='text' placeholder='Name' value={this.state.name} onChange={(event)=>this.updateState('name', event)}/>
        <input type='text' placeholder='Login Code' value={this.state.login_code} onChange={(event)=>this.updateState('login_code', event)} />
        <button onClick={(event)=> this.handleSubmit(event)}>Submit</button>
      </div>
    );
  }
}

export default AddUser;
