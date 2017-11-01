import { connect } from 'react-redux';
import { addSeat } from './../Actions/index.js';
import Seat from './../Components/Seat/Seat';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  tables: store.tables
});


export default connect(mapStateToProps, undefined)(Seat);
