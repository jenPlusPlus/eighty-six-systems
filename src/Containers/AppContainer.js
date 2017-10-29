import { connect } from 'react-redux';
// import { loginUser } from './../Actions/index.js';
import App from './../Components/App/App';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default connect(mapStateToProps, undefined)(App);
