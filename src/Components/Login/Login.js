import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginCode: '0000',
      userLoginCode: ''
    };
  }

  updateState(value) {
    this.setState({
      userLoginCode: this.state.userLoginCode.concat(value)
    });
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
          <button className="login-submit">Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
