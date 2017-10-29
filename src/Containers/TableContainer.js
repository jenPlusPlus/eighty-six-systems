import { connect } from 'react-redux';
import Table from './../Components/Table/Table';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser
});

// const mapDispatchToProps = (dispatch) => ({
//   logoutUser: (user) => {
//     return dispatch(logoutUser(user));
//   }
// });

export default connect(mapStateToProps, undefined)(Table);
