import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='table'>
        <h3>{Object.keys(this.props.table)}</h3>
      </div>
    );
  }
}

Table.propTypes = {
  table: PropTypes.object
};

export default Table;
