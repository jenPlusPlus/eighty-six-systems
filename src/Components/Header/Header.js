import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { currentUser, location } = props;
  const hideButton = (location.pathname === '/adduser'
    || location.pathname === '/login')  
    ? 'hide-button'
    : '';
  return (
    <div className="header">
      <h1>eighty-six</h1>

      { !currentUser.loginCode &&
        <Link to={'/login'}>
          <button className={`login-button ${hideButton}`}>Login</button>
        </Link>
      }
      { currentUser.loginCode &&
        <Link to={'/'}>
          <button className={`logout-button ${hideButton}`}>Logout</button>
        </Link>
      }
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  location: PropTypes.object
};

export default Header;
