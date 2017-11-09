import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Seat extends Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.addCurrentSeat({
      tableNumber: this.props.currentTableNumber,
      seatNumber: this.props.seat.seatNumber,
      order: this.props.currentSeatOrder || []
    });
  }

  removeFromOrder(item) {
    this.props.removeFromCurrentTableOrder(item, this.props.seat.seatNumber);
  }

  getPreviousOrders() {
    const currentTable = this.props.tables.find( table => table.tableNumber === this.props.currentTableNumber);
    const currentSeat = currentTable.seats.find( seat => seat.seatNumber === this.props.seat.seatNumber);
    const mappedPrevOrders = currentSeat.order.map( (item, index) => {
      return (
        <li key={index + Date.now()}
        className='prev-ordered-menu-item'>{item.item}
        </li>
      );
    });
    return mappedPrevOrders;
  }

  getCurrentOrder() {
    const currentSeat = this.props.currentTableOrder.filter( order => {
      return order.seatNumber === this.props.seat.seatNumber;
    });
    if (currentSeat.length > 0){
      const mappedOrders = currentSeat[0].currentSeatOrder
        .map( (item, index) => {
          return <li key={index + Date.now()}
                 className='menu-item'>{item.item}
            <button className='edit-order-item-button'>Edit</button>
            <button className='remove-order-item-button'
              onClick={() => this.removeFromOrder(item)}>X</button>
          </li>;
        });
      return mappedOrders;
    }
  }

  hasCurrentOrder() {
    const currentSeat = this.props.currentTableOrder.find( seat => seat.seatNumber === this.props.seat.seatNumber);
    if (currentSeat) {
      return currentSeat.currentSeatOrder.length > 0 ?
        'has-current-order' :
        '';
    } else {
      return '';
    }
  }

  hasPreviousOrders() {
    const currentTable = this.props.tables.find( table => table.tableNumber === this.props.currentTableNumber);
    const currentSeat = currentTable.seats.find( seat => seat.seatNumber === this.props.seat.seatNumber);
    return currentSeat.order.length <= 0 ?
      'has-no-previous-orders' :
      '';
  }

  render() {
    return (
      <div className='seat'
        onClick={() => this.handleClick()}>
        <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.seat.seatNumber}/menu`}>
          <h3>{this.props.seat.seatNumber}</h3>
        </Link>
        <div className='orders-container'>
          <ul className='seat-order-container'>
            <h4 className={`current-order-list-${this.hasCurrentOrder()}`}>Current Order:</h4>
            {this.getCurrentOrder()}</ul>
          <ul className='previous-seat-order-container'>
            <h4 className={`prev-orders-list ${this.hasPreviousOrders()} ${this.hasCurrentOrder()}`}>Previous Orders:</h4>
            {this.getPreviousOrders()}</ul>
        </div>
      </div>
    );
  }
}

Seat.propTypes = {
  currentTableNumber: PropTypes.string,
  seat: PropTypes.object,
  addCurrentSeat: PropTypes.func,
  currentUser: PropTypes.object,
  currentTable: PropTypes.object,
  removeFromCurrentTableOrder: PropTypes.func,
  currentTableOrder: PropTypes.array,
  currentSeatOrder: PropTypes.array,
  tables: PropTypes.array
};

export default Seat;
