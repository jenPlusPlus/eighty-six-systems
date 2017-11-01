import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Seat extends Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.addCurrentSeat({
      tableNumber: this.props.currentTableNumber,
      seatNumber: this.props.seat.seatNumber,
      order: []
    });
  }

  render() {
    return (
      <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.seat.seatNumber}`}>
        <div className='seat'
          onClick={() => this.handleClick()}>
          <h3>{this.props.seat.seatNumber}</h3>
        </div>
      </Link>
    );
  }
}

Seat.propTypes = {
  currentTableNumber: PropTypes.string,
  seat: PropTypes.object,
  addCurrentSeat: PropTypes.func
};

export default Seat;
