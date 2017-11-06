import { shallow } from 'enzyme';
import Entree from './Entree';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Entree snapshot', () => {

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
    },
    tables: [{
      tableNumber: '22',
      seats: [{
        seatNumber: '1',
        order: [
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}
        ]
      }]
    }],
    currentSeatOrder: [
      {item: 'Lamb', price: 29},
      {item: 'Burger', price: 19},
      {item:'Mahi Mahi', price: 27}
    ]
  };

  Date.now = jest.fn(() => 1482363367071);

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Entree
      currentUser={initialState.currentUser}
      currentTable={initialState.currentTable}
      currentSeat={initialState.currentSeat}
      tables={initialState.tables}
      currentSeatOrder={initialState.currentSeatOrder}
      key={1482363367071}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
