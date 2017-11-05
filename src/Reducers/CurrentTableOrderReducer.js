const currentTableOrder = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_CURRENT_TABLE_ORDER':
    return [...state, action.addToTableInfo];
  case 'REMOVE_FROM_CURRENT_TABLE_ORDER':
    return state.map( seat => {
      console.log('seat: ', action.removeItemInfo.seatNumber);
      if (seat.seatNumber === action.removeItemInfo.seatNumber) {
        return seat.currentSeatOrder.filter(item => item.item !== action.removeItemInfo.menuItem);
      } else {
        return seat;
      }
    });
  case 'CLEAR_CURRENT_TABLE_ORDER':
    return [];
  default:
    return state;
  }
};

export default currentTableOrder;
