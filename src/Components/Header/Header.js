import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { currentUser, location, logoutUser } = props;
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
        <div className='header-logged-in'>
          <h2>Hello, {currentUser.name}</h2>
          <Link to={'/'}>
            <button className={`logout-button ${hideButton}`}
              onClick={() => logoutUser(currentUser)}>Logout</button>
          </Link>
        </div>
      }
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  location: PropTypes.object,
  logoutUser: PropTypes.func
};

export default Header;
