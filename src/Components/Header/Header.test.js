import { shallow } from 'enzyme';
import Header from './Header';
import ReactDOM from 'react-dom';
import React from 'react';

//need to mock out routes

describe('Header snapshot', () => {

  const initialState = {
    currentUser: {name: 'Jen', loginCode: '0000'},
    currentTable: {tableNumber: '22'},
    currentSeat: {
      tableNumber: '22',
      seatNumber: '1',
      order: [
        {item: 'Lamb', price: 29},
        {item: 'Burger', price: 19},
        {item:'Mahi Mahi', price: 27}
      ]
    }
  };

  it.skip('should always match the snapshot', () => {
    const wrapper = shallow(<Header
      currentUser={initialState.currentUser}
      currentTable={initialState.currentTable}
      currentSeat={initialState.currentSeat}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
