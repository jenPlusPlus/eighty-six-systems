import { connect } from 'react-redux';
import Entree from './../Components/Entree/Entree';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  currentTable: store.currentTable,
  currentSeat: store.currentSeat,
  tables: store.tables
});

export default connect(mapStateToProps, undefined)(Entree);
