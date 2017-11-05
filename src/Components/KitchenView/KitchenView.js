import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KitchenView extends Component {
  constructor() {
    super();
  }

  mapSeats(order) {
    const mappedSeatOrders = order.currentTableOrder.map( (seat, key) => {
      const mappedCurrentSeatOrders = seat.currentSeatOrder.map( (item, index) => {
        return <li key={index+Date.now()}
               className='seat-order-item'>{item.item}</li>
      });
      return <ul className='seat-order'
        key={key+Date.now()}>Seat {seat.seatNumber}:
        {mappedCurrentSeatOrders}
      </ul>
    });
    return mappedSeatOrders;
  }

  render() {
    const mappedOrders = this.props.allOrders.map( (order, index) => {
      return (
        <div key={index+Date.now()}
        className='kitchen-view-order'>
          <h3>Server: {order.server}</h3>
          <h3>Table: {order.tableNumber}</h3>
          <button className='remove-from-kitchen-view'>Order Complete</button>
          {this.mapSeats(order)}
        </div>
      );
    });
    return (
      <div className='orders-wrapper'>
        <button>Table Manager</button>
        <h2>All Orders</h2>
        <div className='all-orders'>
          {mappedOrders}
        </div>
      </div>
    );
  }
}

KitchenView.propTypes = {
  allOrders: PropTypes.array
};

export default KitchenView;
