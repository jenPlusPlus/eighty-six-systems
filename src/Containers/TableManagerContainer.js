import { connect } from 'react-redux';
import TableManager from './../Components/TableManager/TableManager';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default connect(mapStateToProps, undefined)(TableManager);
