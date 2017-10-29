import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  console.log('header props: ', props);
  return (
    <div className="header">
      <h1>eighty-six</h1>
      { !props.currentUser.loginCode &&
        <Link to={'/login'}>
          <button className="login-button">Login</button>
        </Link>
      }
      { props.currentUser.loginCode &&
        <Link to={'/'}>
          <button className="logout-button">Logout</button>
        </Link>
      }
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

export default Header;
