import { connect } from 'react-redux';
import Header from './../Components/Header/Header';
import { withRouter } from 'react-router-dom';
import { logoutUser } from './../Actions/index.js';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (user) => {
    return dispatch(logoutUser(user));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
