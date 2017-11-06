import { shallow } from 'enzyme';
import Seat from './Seat';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Seat snapshot', () => {

  const initialState = {
    currentUser: {name: 'Jen', loginCode: '0000'},
    currentTable: {tableNumber: '22'},
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
    ],
    currentTableOrder: [
      {
        seatNumber: '1',
        currentSeatOrder: [
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}
        ]
      },
      {
        seatNumber: '2',
        currentSeatOrder: [
          {item: 'Scallops', price: 30}
        ]
      }
    ]
  };

  Date.now = jest.fn(() => 1482363367071);

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Seat
      currentUser={initialState.currentUser}
      currentTable={initialState.currentTable}
      tables={initialState.tables}
      currentSeatOrder={initialState.currentSeatOrder}
      currentTableOrder={initialState.currentTableOrder}
      key={1482363367071}
      seat={{
        tableNumber: '22',
        seatNumber: '1',
        order: [
        {item: 'Lamb', price: 29},
        {item: 'Burger', price: 19},
        {item:'Mahi Mahi', price: 27}
        ]
      }}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
