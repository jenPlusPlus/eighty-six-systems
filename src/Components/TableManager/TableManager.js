import React, { Component } from 'react';
import TableContainer from './../../Containers/TableContainer';
import firebase from './../../firebase.js';
import PropTypes from 'prop-types';

class TableManager extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  updateState(event) {
    this.setState({
      input: event.target.value
    });
  }

  clearForm() {
    this.setState({
      input: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const usersRef = firebase.database().ref('users');
    usersRef.orderByChild("loginCode").equalTo(this.props.currentUser.loginCode)
      .once('value', snapshot => {
        snapshot.forEach(item =>
          item.child('tables').ref.push(
            {[this.state.input]: {seats: 0}} ));
        this.clearForm();
      });
  }

  render() {
    return (
      <div className="server-dashboard">
        <h3>SERVER DASHBOARD!</h3>
        <form>
          <input type='text'
            placeholder='Table Number'
            onChange={(event) => this.updateState(event)}
            value={this.state.input}/>
          <button className='add-table'
            onClick={(event) => this.handleSubmit(event)}>Add Table</button>
        </form>
        <div className='table-container'>
          <TableContainer />
        </div>
      </div>
    );
  }
}

TableManager.propTypes = {
  currentUser: PropTypes.object
};

export default TableManager;
