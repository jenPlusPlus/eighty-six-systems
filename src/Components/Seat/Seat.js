import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Seat extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='seat'>
        SEAT!
        {/* <h3>{Object.keys(this.props.table.seat)}</h3> */}
      </div>
    );
  }
}

Seat.propTypes = {
  table: PropTypes.object
};

export default Seat;
