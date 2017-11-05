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

  getCurrentOrder() {
    const currentSeat = this.props.currentTableOrder.filter( order => {
      return order.seatNumber === this.props.seat.seatNumber;
    });
    if (currentSeat.length > 0){
      const mappedOrders = currentSeat[0].currentSeatOrder.map( (item, index) => {
        return <li key={index + Date.now()}>{item.item}
          <button className='edit-order-item-button'>Edit</button>
          <button className='remove-order-item-button'
            onClick={() => this.removeFromOrder(item)}>Remove</button>
        </li>;
      });
      return mappedOrders;
    }
  }

  render() {
    return (
      <Link to={`/${this.props.currentUser.loginCode}/tables/${this.props.currentTable.tableNumber}/${this.props.seat.seatNumber}/menu`}>
        <div className='seat'
          onClick={() => this.handleClick()}>
          <h3>{this.props.seat.seatNumber}</h3>
          <ul>{this.getCurrentOrder()}</ul>
        </div>
      </Link>
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
  currentSeatOrder: PropTypes.array
};

export default Seat;
