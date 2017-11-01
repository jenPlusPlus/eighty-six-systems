import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuView extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='menu-view'>
        <div>
          <h3 className='table-info'>Table {this.props.currentTable.tableNumber}</h3>
          <h3 className='table-info'>Seat {this.props.currentSeat.seatNumber}</h3>
          <h3 className='table-info'>MENU VIEW</h3>
        </div>
      </div>
    );
  }
}

MenuView.propTypes = {
  currentUser: PropTypes.object,
  currentTable: PropTypes.object,
  currentSeat: PropTypes.object
};

export default MenuView;
