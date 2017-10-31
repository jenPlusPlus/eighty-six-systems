const tables = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TABLE':
    return [...state, action.table];
  case 'ADD_SEAT':
    return (
      state.map(table => {
        return table.tableNumber === action.seatInfo.tableNumber ?
          {...table, seats: [...table.seats, action.seatInfo]} :
          table;
      })
    );
  default:
    return state;
  }
};

export default tables;
