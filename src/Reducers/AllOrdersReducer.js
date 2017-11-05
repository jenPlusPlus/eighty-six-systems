const allOrders = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_ALL_ORDERS':
    return [...state, action.orderInfo];
  case 'REMOVE_FROM_ALL_ORDERS':
    return state.filter(order => order !== action.orderInfo);
  case 'CLEAR_ALL_ORDERS':
    return [];
  default:
    return state;
  }
};

export default allOrders;
