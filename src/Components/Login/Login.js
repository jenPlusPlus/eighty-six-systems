import React, { Component } from 'react';
import firebase from './../../firebase.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      systemLoginCode: '0000',
      userLoginCode: ''
    };
  }

  updateState(value) {
    this.setState({
      userLoginCode: this.state.userLoginCode.concat(value)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.systemLoginCode === this.state.userLoginCode) {
      const usersRef = firebase.database().ref('users');
      usersRef.orderByChild("loginCode").equalTo(this.state.userLoginCode)
        .once('value', snapshot => {
          const currentUser = Object.entries(snapshot.val());
          this.props.loginUser(currentUser[0][1]);
          alert(`Welcome, ${currentUser[0][1].name}`);
        });
    } else {
      alert('LOGIN CODE INCORRECT!');
    }

    this.setState({
      userLoginCode: ''
    });



    // this.props.loginUser();
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form">
          <button className="login-button"
            onClick={() => this.updateState("1")}>1</button>
          <button className="login-button"
            onClick={() => this.updateState("2")}>2</button>
          <button className="login-button"
            onClick={() => this.updateState("3")}>3</button>
          <button className="login-button"
            onClick={() => this.updateState("4")}>4</button>
          <button className="login-button"
            onClick={() => this.updateState("5")}>5</button>
          <button className="login-button"
            onClick={() => this.updateState("6")}>6</button>
          <button className="login-button"
            onClick={() => this.updateState("7")}>7</button>
          <button className="login-button"
            onClick={() => this.updateState("8")}>8</button>
          <button className="login-button"
            onClick={() => this.updateState("9")}>9</button>
          <button className="login-button"
            onClick={() => this.updateState("0")}>0</button>
          <button className="login-submit"
            onClick={(event) => this.handleSubmit(event)}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
