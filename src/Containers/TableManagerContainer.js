import { connect } from 'react-redux';
import { addTable } from './../Actions/index.js';
import TableManager from './../Components/TableManager/TableManager';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables
});

const mapDispatchToProps = (dispatch) => ({
  addTable: (table) => {
    return dispatch(addTable(table));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableManager);
