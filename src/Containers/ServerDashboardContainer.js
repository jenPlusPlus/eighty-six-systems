import { connect } from 'react-redux';
import ServerDashboard from './../Components/ServerDashboard/ServerDashboard';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

export default connect(mapStateToProps, undefined)(ServerDashboard);
