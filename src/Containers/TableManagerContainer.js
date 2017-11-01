import { connect } from 'react-redux';
import { addTable, addCurrentTable } from './../Actions/index.js';
import TableManager from './../Components/TableManager/TableManager';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables,
  currentTable: store.currentTable
});

const mapDispatchToProps = (dispatch) => ({
  addTable: (table) => {
    return dispatch(addTable(table));
  },
  addCurrentTable: (table) => {
    return dispatch(addCurrentTable(table));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableManager);
