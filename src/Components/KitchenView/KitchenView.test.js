import { shallow } from 'enzyme';
import KitchenView from './KitchenView';
import ReactDOM from 'react-dom';
import React from 'react';

describe('KitchenView snapshot', () => {

  it('should always match the snapshot', () => {
    const wrKitchenViewer = shallow(<KitchenView
      allOrders={[]}
      currentUser={{name: 'Jen', loginCode: '0000'}}/>);

    expect(wrKitchenViewer).toMatchSnapshot();
  });
});
