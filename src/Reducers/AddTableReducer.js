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
  case 'ADD_MENU_ITEM':
    return (
      state.map(table => {
        table.tableNumber === action.seatInfo.tableNumber ?
          table.seats.map( seat => {
            return seat.seatNumber === action.menuInfo.seatNumber ?
              [...table.seats, action.menuInfo.menuItem] :
              table.seats;
          }) :
          table;
      })
    );
  default:
    return state;
  }
};

export default tables;
