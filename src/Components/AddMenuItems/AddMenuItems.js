import React, { Component } from 'react';
import firebase from './../../firebase.js';

class AddMenuItems extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loginCode: ''
    };
  }
  render() {
    return (
      <div className='add-menu-items'>MENU!
      </div>
    );
  }
}

export default AddMenuItems;
