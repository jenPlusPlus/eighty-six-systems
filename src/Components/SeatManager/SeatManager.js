import React, { Component } from 'react';
import SeatContainer from './../../Containers/SeatContainer';
// import firebase from './../../firebase.js';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class SeatManager extends Component {
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
    this.props.addSeat(this.props.currentTable.tableNumber,
      {
        seatNumber: this.state.input,
        order: []
      });
    this.clearForm();
  }

  sendOrder() {
    // add seats with orders to currentTable in store
    this.props.addToAllOrders(this.props.currentUser.name, this.props.currentTable.tableNumber, this.props.currentTableOrder);
    this.props.addMenuItem(this.props.currentTable.tableNumber, this.props.currentTableOrder);
    this.props.clearCurrentTableOrder();
  }

  closeTable() {
    const indexToRemove = this.props.tables.findIndex( table => {
      console.log('table: ', table.tableNumber);
      console.log('current table: ', this.props.currentTable.tableNumber);
      return table.tableNumber === this.props.currentTable.tableNumber;
    });
    this.props.removeTable(indexToRemove);
  }

  mapSeats() {
    const currTable = this.props.tables.find((table) => {
      return table.tableNumber === this.props.currentTable.tableNumber;
    });

    const mappedSeats = currTable.seats.map( (seat, index) => {
      return (
        <SeatContainer key={index+Date.now()}
          seat={seat}
          currentTableNumber={this.props.currentTable.tableNumber}
          addCurrentSeat={this.props.addCurrentSeat}/>
      );
    });
    return mappedSeats;
  }

  render() {
    return (
      <div className="server-dashboard-wrapper">
        {this.props.currentUser.loginCode &&
          <div className='server-dashboard'>
            <Link to={`/${this.props.currentUser.loginCode}/tables`}>
              <h3 className='all-tables-button'>All Tables</h3>
            </Link>
            <form>
              <input type='text'
                placeholder='Enter Seat Number'
                onChange={(event) => this.updateState(event)}
                value={this.state.input}/>
              <button className='add-seat'
                onClick={(event) => this.handleSubmit(event)}>Add Seat</button>
            </form>
            <h3 className='table-info-seat-manager'>Table {this.props.currentTable.tableNumber}</h3>
            <div className='seat-container'>
              {this.mapSeats()}
            </div>
            
            <button className='send-order-button'
              onClick={() => this.sendOrder()}>Send Order</button>
            <Link to={`/${this.props.currentUser.loginCode}/tables`}>
              <button className='close-table-button'
                onClick={() => this.closeTable()}>Close Table</button>
            </Link>

          </div>
        }
        {!this.props.currentUser.loginCode &&
          <Redirect to={'/login'} />
        }
      </div>
    );
  }
}

SeatManager.propTypes = {
  currentUser: PropTypes.object,
  addSeat: PropTypes.func,
  seats: PropTypes.array,
  currentTable: PropTypes.object,
  tables: PropTypes.array,
  addCurrentSeat: PropTypes.func,
  currentTableOrder: PropTypes.array,
  addToAllOrders: PropTypes.func,
  clearCurrentTableOrder: PropTypes.func,
  addMenuItem: PropTypes.func,
  removeTable: PropTypes.func
};

export default SeatManager;
