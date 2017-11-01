import { connect } from 'react-redux';
import MenuView from './../Components/MenuView/MenuView';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat
});

export default connect(mapStateToProps, undefined)(MenuView);
