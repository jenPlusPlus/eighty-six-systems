import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Table extends Component {
  constructor() {
    super();
  }
  handleClick() {
    console.log('table', this.props.table.tableNumber);
    this.props.addCurrentTable({tableNumber: this.props.table.tableNumber});
  }

  render() {
    return (
      <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.table.tableNumber}`}>
        <div className='table'>
          <h3 onClick={() => this.handleClick()}>
            {this.props.table.tableNumber}
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
