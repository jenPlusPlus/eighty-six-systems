import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seat extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='seat'>
        <h3>{this.props.seat.seatNumber}</h3>
      </div>
    );
  }
}

Seat.propTypes = {
  table: PropTypes.object,
  seat: PropTypes.object
};

export default Seat;
