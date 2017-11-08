import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class KitchenView extends Component {
  constructor() {
    super();
  }

  mapSeats(order) {
    const mappedSeatOrders = order.currentTableOrder.map( (seat, key) => {
      const mappedCurrentSeatOrders =
      seat.currentSeatOrder.map( (item, index) => {
        return <li
          key={index+Date.now()} className='seat-order-item'>{item.item}
        </li>;
      });
      return <ul className='seat-order'
        key={key+Date.now()}>Seat {seat.seatNumber}:
        {mappedCurrentSeatOrders}
      </ul>;
    });
    return mappedSeatOrders;
  }

  removeOrderFromQueue(order) {
    this.props.removeFromAllOrders(order);
  }

  render() {
    const mappedOrders = this.props.allOrders.map( (order, index) => {
      return (
        <div key={index+Date.now()}
        className='kitchen-view-order'>
          <div className='order-table-info'>
            <h3 className='server'>Server: {order.server}</h3>
            <h3 className='table-number'>Table: {order.tableNumber}</h3>
          </div>
            <button className='remove-from-kitchen-view'
            onClick={() =>
              this.removeOrderFromQueue(order)}>Order Complete</button>
          <div className='seat-order-card'>
            {this.mapSeats(order)}
          </div>
        </div>
      );
    });
    return (
      <div className='orders-wrapper'>
        <Link to={`/${this.props.currentUser.loginCode}/tables`}>
          <button className='table-manager-button'>Table Manager</button>
        </Link>
        <h2>All Orders</h2>
        <div className='all-orders'>
          {mappedOrders}
        </div>
      </div>
    );
  }
}

KitchenView.propTypes = {
  allOrders: PropTypes.array,
  removeFromAllOrders: PropTypes.func,
  currentUser: PropTypes.object
};

export default KitchenView;
