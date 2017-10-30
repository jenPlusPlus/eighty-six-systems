import { connect } from 'react-redux';
import { addTable } from './../Actions/index.js';
import Table from './../Components/Table/Table';

const mapStateToProps = (store) => ({
  currentUser: store.currentUser,
  tables: store.tables
});


export default connect(mapStateToProps, undefined)(Table);
