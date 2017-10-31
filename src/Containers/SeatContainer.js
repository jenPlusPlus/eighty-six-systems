import { connect } from 'react-redux';
import { addSeat } from './../Actions/index.js';
import Seat from './../Components/Seat/Seat';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables,
  seats: store.seats
});


export default connect(mapStateToProps, undefined)(Seat);
