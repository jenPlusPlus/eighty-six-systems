import { shallow } from 'enzyme';
import AddUser from './AddUser';
import ReactDOM from 'react-dom';
import React from 'react';

describe('AddUser snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<AddUser />);

    expect(wrapper).toMatchSnapshot();
  });
});
