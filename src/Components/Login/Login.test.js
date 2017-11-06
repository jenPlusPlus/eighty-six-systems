import { shallow } from 'enzyme';
import Login from './Login';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Login snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Login
      currentUser={{name: 'Jen', KitchenViewCode: '0000'}}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
