import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menu from './../../menu'

class Entree extends Component {
  constructor() {
    super();
  }

  handleClick(entree) {
    console.log('entree: ', entree);
    this.props.addMenuItem(this.props.currentTable.tableNumber, this.props.currentSeat.seatNumber, entree);
  }

  render() {
    const mappedEntrees = Object.keys(menu.Entrees).map( (entree, index) => {
      return (
        <div className='entree'
          key={index+Date.now()}
          onClick={() => this.handleClick(entree)}>
          {entree}
        </div>
      );
    });

    return (<div className='entrees'>
      Entrees:
      {mappedEntrees}
    </div>);
  }
}

Entree.propTypes = {
  addMenuItem: PropTypes.func,
  currentSeat: PropTypes.object,
  currentTable: PropTypes.object
};

export default Entree;
