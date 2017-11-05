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
          const seatsWithOrder = table.seats.map( seat => {
            if (seat.seatNumber === action.menuInfo.seatNumber) {
              return Object.assign({}, seat, {order: seat.order.concat(action.menuInfo.menuItem)});
            } else {
              return seat;
            }
          });
          table.seats = seatsWithOrder;
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
