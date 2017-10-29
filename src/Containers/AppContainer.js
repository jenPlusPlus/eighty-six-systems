import { connect } from 'react-redux';
import App from './../Components/App/App';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default connect(mapStateToProps, undefined)(App);
