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
      <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.seat.seatNumber}/menu/entrees`}>
        <h3 className='entrees-link'>Entrees</h3>
      </Link>
    );
  }
}

Seat.propTypes = {
  currentTableNumber: PropTypes.string,
  seat: PropTypes.object,
  addCurrentSeat: PropTypes.func,
  currentUser: PropTypes.object,
  currentTable: PropTypes.object
};

export default Seat;
