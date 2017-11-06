import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { connect } from 'react-redux';
import EntreeContainer from './EntreeContainer';
import React from 'react';
import * as actions from './../Actions/index';

describe('EntreeContainer tests', () => {

  const mockStore = configureStore();
  const initialState = {
    currentUser: {},
    currentTable: {},
    currentSeat: {},
    tables: [],
    currentSeatOrder: []
  };
  const store = mockStore(initialState);

  it('container should have default state', () => {


    const wrapper = shallow(
      <EntreeContainer
        store={store}
        currentUser={initialState.currentUser}
        currentTable={initialState.currentTable}
        currentSeat={initialState.currentSeat}
        tables={initialState.tables}
        currentSeatOrder={initialState.currentSeatOrder}
      />
    );


    expect(wrapper.instance().props.currentUser).toEqual(initialState.currentUser);
    expect(wrapper.instance().props.currentTable).toEqual(initialState.currentTable);
    expect(wrapper.instance().props.currentSeat).toEqual(initialState.currentSeat);
    expect(wrapper.instance().props.tables).toEqual(initialState.tables);
    expect(wrapper.instance().props.currentSeatOrder).toEqual(initialState.currentSeatOrder);




  });

  it('container should add things to state', () => {

    const mockStore = configureStore();
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
    const store = mockStore(initialState);
    const wrapper = shallow(
      <EntreeContainer
        store={store}
        currentUser={initialState.currentUser}
        currentTable={initialState.currentTable}
        currentSeat={initialState.currentSeat}
        tables={initialState.tables}
        currentSeatOrder={initialState.currentSeatOrder}
        key={1482363367071}
      />
    );

    expect(wrapper.instance().props.currentUser).toEqual(initialState.currentUser);
    expect(wrapper.instance().props.currentTable).toEqual(initialState.currentTable);
    expect(wrapper.instance().props.currentSeat).toEqual(initialState.currentSeat);
    expect(wrapper.instance().props.tables).toEqual(initialState.tables);
    expect(wrapper.instance().props.currentSeatOrder).toEqual(initialState.currentSeatOrder);


  });

});
