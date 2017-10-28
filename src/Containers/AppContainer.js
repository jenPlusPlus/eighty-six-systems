import { connect } from 'react-redux';
import { loginUser } from './../Actions/index.js';
import App from './../Components/App/App';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  currentUser: (user) => {
    return dispatch(loginUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
