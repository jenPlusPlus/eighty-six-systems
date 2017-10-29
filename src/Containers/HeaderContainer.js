import { connect } from 'react-redux';
import Header from './../Components/Header/Header';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default connect(mapStateToProps, undefined)(Header);
