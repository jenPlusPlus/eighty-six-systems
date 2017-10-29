import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AddUser from './../AddUser/AddUser';
import LoginContainer from './../../Containers/LoginContainer';
import ServerDashboardContainer
  from './../../Containers/ServerDashboardContainer';
import Header from './../Header/Header';
import PropTypes from 'prop-types';
// import Login from './../Login/Login';
// import firebase from './../../firebase.js';


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
              <Header />
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

          {/* <Route exact path='/serverdashboard'
          component={ServerDashboardContainer}/> */}

          <Route path='/:loginCode/serverdashboard' render={({ match }) => {
            const server =
              this.props.currentUser.loginCode === match.params.loginCode;
            if (server) {
              return <ServerDashboardContainer />;
            }
            return (<div>This server does not exist! </div>);
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object
};

export default App;
