import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menu from './../../menu';

class Entree extends Component {
  constructor() {
    super();
  }

  addToOrder(entree, entreeObject) {
    const order = Object.assign({}, {item: entree}, {price: entreeObject.price});
    this.props.addToCurrentSeatOrder(order);
  }

  removeFromOrder(menuItem) {
    this.props.removeFromCurrentSeatOrder(menuItem);
  }

  addOrderToSeat() {
    this.props.addToCurrentTableOrder(this.props.currentSeatOrder, this.props.currentSeat.seatNumber);
    this.props.clearCurrentSeatOrder();
  }

  displaycurrentSeatOrder() {
    const mappedOrder = this.props.currentSeatOrder.map( (menuItem, index) => {
      return <li key={index + Date.now()}>{menuItem.item}
        <button className='edit-order-item-button'>Edit</button>
        <button className='remove-order-item-button'
          onClick={() => this.removeFromOrder(menuItem)}>Remove</button>
      </li>;
    });
    return mappedOrder;
  }

  render() {
    const mappedEntrees = Object.keys(menu.Entrees).map( (entree, index) => {
      return (
        <div className='entree'
          key={index+Date.now()}
          onClick={() => this.addToOrder(entree, menu.Entrees[entree])}>
          {entree}
        </div>
      );
    });

    return (
      <div className='order-wrapper'>
        <div className='entrees-wrapper'>
          <div className='entrees'>
            Entrees
            {mappedEntrees}
          </div>
        </div>
        <ul className='current-order'>Current Order:
          {this.displaycurrentSeatOrder()}
        </ul>
        <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}`}>
          <button className='add-order-to-seat-button'
            onClick={() => this.addOrderToSeat()}>Add to Seat</button>
        </Link>
      </div>
    );
  }
}

Entree.propTypes = {
  addMenuItem: PropTypes.func,
  currentSeat: PropTypes.object,
  currentTable: PropTypes.object,
  currentSeatOrder: PropTypes.array,
  addToCurrentSeatOrder: PropTypes.func,
  clearCurrentSeatOrder: PropTypes.func,
  removeFromCurrentSeatOrder: PropTypes.func,
  currentUser: PropTypes.object,
  addToCurrentTableOrder: PropTypes.func
};

export default Entree;
