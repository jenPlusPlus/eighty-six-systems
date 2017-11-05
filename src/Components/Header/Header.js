import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { currentUser, location, logoutUser, currentTable, currentSeat } = props;
  const hideButton = (location.pathname === '/adduser'
    || location.pathname === '/login')
    ? 'hide-button'
    : '';

  const onHomePage = (location.pathname === '/')
    ? 'home-page'
    : '';

  return (
    <div className={`header ${onHomePage}`}>
      <h1>eighty-six</h1>
      { currentUser.loginCode && location.pathname === '/' &&
        <Redirect to={`/${currentUser.loginCode}/tables`} />
      }
      { !currentUser.loginCode &&
        <div className='header-logged-out'>
          <Link to={'/login'}>
            <button className={`login-button ${hideButton}`}>Login</button>
          </Link>
        </div>
      }
      { currentUser.loginCode &&
        <div className='header-logged-in'>
          <Link to='/kitchenview'>
            <button className='go-to-kitchen-view'>Kitchen View</button>
          </Link>
          <h2 className='greeting'>Hello, {currentUser.name}</h2>
          <Link to={'/'}>
            <button className={`logout-button ${hideButton}`}
              onClick={() => logoutUser(currentUser)}>Logout</button>
          </Link>
        </div>
      }
      {location.pathname === `/${currentUser.loginCode}/tables/${currentTable.tableNumber}` &&
        <div className='header-logged-in'>
          <h2 className='greeting'>Hello, {currentUser.name}</h2>
          <h2 className='current-table'>Table {currentTable.tableNumber}</h2>
          <Link to={'/'}>
            <button className={`logout-button ${hideButton}`}
              onClick={() => logoutUser(currentUser)}>Logout</button>
          </Link>
        </div>
      }
      {(location.pathname === `/${currentUser.loginCode}/tables/${currentTable.tableNumber}/${currentSeat.seatNumber}/menu` ||
        location.pathname === `/${currentUser.loginCode}/tables/${currentTable.tableNumber}/${currentSeat.seatNumber}/menu/entrees`) &&
        <div className='header-logged-in'>
          <h2 className='greeting'>Hello, {currentUser.name}</h2>
          <h2 className='current-table'>Table {currentTable.tableNumber}</h2>
          <h2 className='current-seat'>Seat {currentSeat.seatNumber}</h2>
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
  currentTable: PropTypes.object,
  currentSeat: PropTypes.object,
  location: PropTypes.object,
  logoutUser: PropTypes.func
};

export default Header;
