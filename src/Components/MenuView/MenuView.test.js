import { shallow } from 'enzyme';
import MenuView from './MenuView';
import ReactDOM from 'react-dom';
import React from 'react';

describe('MenuView snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<MenuView
      currentUser={{name: 'Jen', KitchenViewCode: '0000'}}
      currentTable={{tableNumber: '22'}}
      currentSeat={{
        tableNumber: '22',
        seatNumber: '1',
        order: [
        {item: 'Lamb', price: 29},
        {item: 'Burger', price: 19},
        {item:'Mahi Mahi', price: 27}
        ]
      }}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
