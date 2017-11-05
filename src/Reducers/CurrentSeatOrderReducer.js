const currentSeatOrder = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_CURRENT_SEAT_ORDER':
    return [...state, action.menuItem];
  case 'REMOVE_FROM_CURRENT_SEAT_ORDER':
    return state.filter( item => item !== action.menuItem);
  case 'CLEAR_CURRENT_SEAT_ORDER':
    return [];
  default:
    return state;
  }
};

export default currentSeatOrder;
