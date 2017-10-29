import { connect } from 'react-redux';
import Header from './../Components/Header/Header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default withRouter(connect(mapStateToProps, undefined)(Header));
