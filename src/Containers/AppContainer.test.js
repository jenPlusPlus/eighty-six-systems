import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { connect } from 'react-redux';
import AppContainer from './AppContainer';
import App from './../Components/App/App';
import React from 'react';
import * as actions from './../Actions/index';

describe('AppContainer tests', () => {

  it('container should have default state', () => {

    const mockStore = configureStore();
    const initialState = { currentUser: {} };
    const store = mockStore(initialState);
    const wrapper = shallow(
      <AppContainer
        store={store}
        currentUser={initialState}
      />
    );


    expect(wrapper.instance().props.currentUser).toEqual({ currentUser: {} });
  });

  it('container should add a user to state', () => {

    const mockStore = configureStore();
    const initialState = { currentUser: {name: 'Jen', loginCode: '0000'} };
    const store = mockStore(initialState);
    const wrapper = shallow(
      <AppContainer
        store={store}
        currentUser={initialState}
      />
    );


    expect(wrapper.instance().props.currentUser).toEqual({ currentUser: {name: 'Jen', loginCode: '0000'} });
  });

});
