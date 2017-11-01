import React, { Component } from 'react';
import SeatContainer from './../../Containers/SeatContainer';
import firebase from './../../firebase.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <div className="server-dashboard">
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
  addCurrentSeat: PropTypes.func
};

export default SeatManager;
