import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class MenuView extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='menu-view-wrapper'>
        {this.props.currentUser.loginCode &&
          <div className="menu-view">
            <div className='go-back'>
              <Link to={`/${this.props.currentUser.loginCode}/tables`}>
                <h3 className='all-tables-button'>All Tables</h3>
              </Link>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}`}>
                <h3 className='table-info-menuview table-button'>Table {this.props.currentTable.tableNumber}</h3>
              </Link>
              <h3 className='table-info-menuview seat-button'>Seat {this.props.currentSeat.seatNumber}</h3>
            </div>
            <div className='menu'>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.seat.seatNumber}/menu/entrees`}>
                <div className='entrees'>
                  <h3 className='seat-info'>Entrees</h3>
                </div>
              </Link>
            </div>
          </div>
        }
        {!this.props.currentUser.loginCode &&
          <Redirect to={'/login'} />
        }
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
