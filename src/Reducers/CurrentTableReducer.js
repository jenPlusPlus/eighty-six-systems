const currentTable = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_CURRENT_TABLE':
    return {
      tableNumber: action.currentTable.tableNumber,
      seats: {}
    };
  case 'REMOVE_CURRENT_TABLE':
    return {};
  default:
    return state;
  }
};

export default currentTable;
