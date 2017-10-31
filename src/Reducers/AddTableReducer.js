const tables = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TABLE':
    return [...state, action.table];
  // case 'ADD_SEAT':
  //   return [action.seatInfo.tableNumber];
  default:
    return state;
  }
};

export default tables;
