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
    console.log('SENDING ORDER');
    console.log('table order: ', this.props.currentTableOrder);
    //sent currentTableOrder to Kitchen View
    //add currentTableOrder to correct table in store
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
            <form>
              <input type='text'
                placeholder='Enter Seat Number'
                onChange={(event) => this.updateState(event)}
                value={this.state.input}/>
              <button className='add-seat'
                onClick={(event) => this.handleSubmit(event)}>Add Seat</button>
            </form>
            <Link to={`/${this.props.currentUser.loginCode}/tables`}>
              <h3 className='all-tables-button'>All Tables</h3>
            </Link>
            <h3 className='table-info-seat-manager'>Table {this.props.currentTable.tableNumber}</h3>
            <div className='seat-container'>
              {this.mapSeats()}
            </div>
            <button className='send-order-button'
              onClick={() => this.sendOrder()}>Send Order</button>
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
  currentTableOrder: PropTypes.array
};

export default SeatManager;
