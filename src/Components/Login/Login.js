import React, { Component } from 'react';
import firebase from './../../firebase.js';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
        });
    } else {
      alert('LOGIN CODE INCORRECT!');
    }

    this.setState({
      userLoginCode: ''
    });

  }

  render() {
    return (
      <div className="login-form-container">
        { !this.props.currentUser.loginCode &&
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
        }
        { this.props.currentUser.loginCode &&
          <Redirect to={`/${this.state.systemLoginCode}/tables`} />
        }
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  currentUser: PropTypes.object
};

export default Login;
