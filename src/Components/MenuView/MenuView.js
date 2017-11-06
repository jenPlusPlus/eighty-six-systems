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
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.currentSeat.seatNumber}/menu/entrees`}>
                <div className='entrees appetizers'>
                  <h3 className='seat-info'>Appetizers</h3>
                </div>
              </Link>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.currentSeat.seatNumber}/menu/entrees`}>
                <div className='entrees soup-salad'>
                  <h3 className='seat-info'>Soups & Salads</h3>
                </div>
              </Link>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.currentSeat.seatNumber}/menu/entrees`}>
                <div className='entrees'>
                  <h3 className='seat-info'>Entrees</h3>
                </div>
              </Link>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.currentSeat.seatNumber}/menu/entrees`}>
                <div className='entrees desserts'>
                  <h3 className='seat-info'>Desserts</h3>
                </div>
              </Link>
              <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.currentSeat.seatNumber}/menu/entrees`}>
                <div className='entrees beverages'>
                  <h3 className='seat-info'>Beverages</h3>
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
