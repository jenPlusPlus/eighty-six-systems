import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seat extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='seat'>
        <h3>{Object.keys(this.props.seat)}</h3>
      </div>
    );
  }
}

Seat.propTypes = {
  table: PropTypes.object,
  seat: PropTypes.object
};

export default Seat;
