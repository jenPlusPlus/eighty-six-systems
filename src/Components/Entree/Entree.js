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
    this.props.addToCurrentOrder(order);
  }

  removeFromOrder(menuItem) {
    this.props.removeFromCurrentOrder(menuItem);
  }

  addOrderToSeat() {
    this.props.addMenuItem(this.props.currentTable.tableNumber, this.props.currentSeat.seatNumber, this.props.currentOrder);
    this.props.clearCurrentOrder();
  }

  displayCurrentOrder() {
    console.log('order: ', this.props.currentOrder);
    const mappedOrder = this.props.currentOrder.map( (menuItem, index) => {
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
          {this.displayCurrentOrder()}
        </ul>
        <button className='submit-button'
          onClick={() => this.addOrderToSeat()}>Add Order to Seat</button>
      </div>
    );
  }
}

Entree.propTypes = {
  addMenuItem: PropTypes.func,
  currentSeat: PropTypes.object,
  currentTable: PropTypes.object,
  currentOrder: PropTypes.array,
  addToCurrentOrder: PropTypes.func,
  clearCurrentOrder: PropTypes.func,
  removeFromCurrentOrder: PropTypes.func
};

export default Entree;
