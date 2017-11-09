const allOrders = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_ALL_ORDERS':
    return [...state, action.orderInfo];
  case 'REMOVE_FROM_ALL_ORDERS':
    return state.filter(order => order.id !== action.order.id);
  default:
    return state;
  }
};

export default allOrders;
