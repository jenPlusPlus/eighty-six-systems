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
        if (table.tableNumber === action.menuInfo.tableNumber) {
          console.log('table: ', table);
          console.log('menuInfo: ', action.menuInfo);
          const seatsWithOrder = table.seats.map( seat => {
            const indexOfSeatInOrder = action.menuInfo.currentTableOrder.findIndex((seatOrder) => {
              return seatOrder.seatNumber === seat.seatNumber;
            });
            if (-1 !== indexOfSeatInOrder) {
              seat.order = seat.order.concat(action.menuInfo.currentTableOrder[indexOfSeatInOrder].currentSeatOrder);
              return seat;
            } else {
              return seat;
            }
          });
          console.log('seatsWithOrder: ', seatsWithOrder);
          const tableWithOrder = Object.assign({}, table, {seats: seatsWithOrder});
          table = tableWithOrder;
          return table;
        } else {
          return table;
        }
      })
    );
  default:
    return state;
  }
};

export default tables;
