import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Table extends Component {
  constructor() {
    super();
  }
  handleClick() {
    console.log('keys', Object.keys(this.props.table));
    this.props.addCurrentTable({tableNumber: Object.keys(this.props.table)[0]});
  }

  render() {
    return (
      <Link to={`/${this.props.currentUser.loginCode}/tables/${Object.keys(this.props.table)[0]}`}>
        <div className='table'>
          <h3 onClick={() => this.handleClick()}>
            {Object.keys(this.props.table)}
          </h3>
        </div>
      </Link>
    );
  }
}

Table.propTypes = {
  table: PropTypes.object,
  currentUser: PropTypes.object,
  addCurrentTable: PropTypes.func
};

export default Table;
