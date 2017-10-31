import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Table extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Link to={`/${this.props.currentUser.loginCode}/tables/${Object.keys(this.props.table)[0]}`}>
        <div className='table'>
          <h3>{Object.keys(this.props.table)}</h3>
        </div>
      </Link>
    );
  }
}

Table.propTypes = {
  table: PropTypes.object,
  currentUser: PropTypes.object
};

export default Table;
