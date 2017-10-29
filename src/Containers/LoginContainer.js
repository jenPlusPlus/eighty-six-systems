import { connect } from 'react-redux';
import { loginUser } from './../Actions/index.js';
import Login from './../Components/Login/Login';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => {
    return dispatch(loginUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
