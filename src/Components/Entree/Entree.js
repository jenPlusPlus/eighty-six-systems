import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menu from './../../menu'

class Entree extends Component {
  constructor() {
    super();
  }

  render() {
    const mappedEntrees = Object.keys(menu.Entrees).map( (entree, index) => {
      return (
        <div className='entree'
          key={index+Date.now()}>
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

export default Entree;
