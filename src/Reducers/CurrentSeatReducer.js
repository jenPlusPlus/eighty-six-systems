const currentSeat = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_CURRENT_SEAT':
    return {
      tableNumber: action.seatInfo.tableNumber,
      seatNumber: action.seatInfo.seatNumber,
      order: []
    };
  case 'ADD_ORDER_TO_CURRENT_SEAT':
    return Object.assign(state, {order: state.order.concat(action.order)});
  case 'REMOVE_CURRENT_SEAT':
    return {};
  default:
    return state;
  }
};

export default currentSeat;
