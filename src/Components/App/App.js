import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import AddUser from './../AddUser/AddUser';
import LoginContainer from './../../Containers/LoginContainer';
import TableManagerContainer
  from './../../Containers/TableManagerContainer';
import SeatManagerContainer from './../../Containers/SeatManagerContainer';
import HeaderContainer from './../../Containers/HeaderContainer';
import MenuViewContainer from './../../Containers/MenuViewContainer';
import EntreeContainer from './../../Containers/EntreeContainer';
import KitchenViewContainer from './../../Containers/KitchenViewContainer';
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Route path='/' render={() => {
            return (
              <HeaderContainer />
            );
          }}/>

          <Route exact path='/adduser' render={() => {
            return (
              <div className="AddUser-wrapper">
                <AddUser />
              </div>
            );
          }}/>

          <Route exact path='/login' component={LoginContainer}/>

          <Route exact path='/:loginCode/tables' render={({ match }) => {
            const server =
              this.props.currentUser.loginCode === match.params.loginCode;
            if (server) {
              return <TableManagerContainer />;
            }
            return (<Redirect to={'/login'} />);
          }} />

          <Route exact path='/:loginCode/tables/:table'
            component={SeatManagerContainer } />

          <Route exact path='/:loginCode/tables/:table/:seat/menu'
            component={MenuViewContainer} />

          <Route exact path='/:loginCode/tables/:table/:seat/menu/entrees'
            component={EntreeContainer}/>

          <Route exact path='/kitchenview' component={KitchenViewContainer}/>

        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

export default App;
