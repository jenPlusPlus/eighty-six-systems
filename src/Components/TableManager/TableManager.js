import React, { Component } from 'react';
// import TableContainer from './../../Containers/TableContainer';
import Table from './../Table/Table';
import firebase from './../../firebase.js';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class TableManager extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  componentDidMount() {
    this.props.removeCurrentTable();
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
            {tableNumber: this.state.input,
              seats: []
            }));
        this.clearForm();
      });
    this.props.addTable({
      tableNumber: this.state.input,
      seats: []
    });
  }

  mapTables() {
    const mappedTables = this.props.tables.map( (table, index) => {
      return (
        <Table key={index+Date.now()}
          table={table}
          addCurrentTable={this.props.addCurrentTable}
          currentUser={this.props.currentUser}/>
      );
    });
    return mappedTables;
  }

  render() {
    return (
      <div className="server-dashboard-wrapper">
        {
          <div className="server-dashboard">
            <form>
              <input type='text'
                placeholder='Enter Table Number'
                onChange={(event) => this.updateState(event)}
                value={this.state.input}/>
              <button className='add-table'
                onClick={(event) => this.handleSubmit(event)}>Add Table</button>
            </form>
            <div className='table-container'>
              {this.mapTables()}
            </div>
          </div>
        }
        {!this.props.currentUser.loginCode &&
          <Redirect to={'/login'} />
        }
      </div>
    );
  }
}

TableManager.propTypes = {
  currentUser: PropTypes.object,
  addTable: PropTypes.func,
  tables: PropTypes.array,
  addCurrentTable: PropTypes.func,
  currentTable: PropTypes.object,
  removeCurrentTable: PropTypes.func
};

export default TableManager;
