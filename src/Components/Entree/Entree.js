import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menu from './../../menu'

class Entree extends Component {
  constructor() {
    super();
  }

  addToOrder(entree) {
    this.props.addToCurrentOrder(entree);

  }

  addOrderToSeat() {
    this.props.addMenuItem(this.props.currentTable.tableNumber, this.props.currentSeat.seatNumber, this.props.currentOrder);
    this.props.clearCurrentOrder();
  }

  render() {
    const mappedEntrees = Object.keys(menu.Entrees).map( (entree, index) => {
      return (
        <div className='entree'
          key={index+Date.now()}
          onClick={() => this.addToOrder(entree)}>
          {entree}
        </div>
      );
    });

    return (<div className='entrees-wrapper'>
      <div className='entrees'>
        Entrees
        {mappedEntrees}
      </div>
      <button className='submit-button'
        onClick={() => this.addOrderToSeat()}>Add to Seat</button>
    </div>);
  }
}

Entree.propTypes = {
  addMenuItem: PropTypes.func,
  currentSeat: PropTypes.object,
  currentTable: PropTypes.object,
  currentOrder: PropTypes.array,
  addToCurrentOrder: PropTypes.func,
  clearCurrentOrder: PropTypes.func
};

export default Entree;
