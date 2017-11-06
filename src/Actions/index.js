export const loginUser = (currentUser) => {
  return {
    type: 'LOGIN_USER',
    currentUser
  };
};

export const logoutUser = (currentUser) => {
  return {
    type: 'LOGOUT_USER',
    currentUser
  };
};

export const addTable = (table) => {
  return {
    type: 'ADD_TABLE',
    table
  };
};

export const addSeat = (tableNumber, seat) => {
  return {
    type: 'ADD_SEAT',
    seatInfo: {
      seatNumber: seat.seatNumber,
      tableNumber: tableNumber,
      order: seat.order
    }
  };
};

export const addCurrentTable = (currentTable) => {
  return {
    type: 'ADD_CURRENT_TABLE',
    currentTable
  };
};

export const addCurrentSeat = (currentSeat) => {
  return {
    type: 'ADD_CURRENT_SEAT',
    seatInfo: {
      seatNumber: currentSeat.seatNumber,
      tableNumber: currentSeat.tableNumber,
      order: currentSeat.order
    }
  };
};

export const addToCurrentSeatOrder = (menuItem) => {
  return {
    type: 'ADD_TO_CURRENT_SEAT_ORDER',
    menuItem
  };
};

export const removeFromCurrentSeatOrder = (menuItem) => {
  return {
    type: 'REMOVE_FROM_CURRENT_SEAT_ORDER',
    menuItem
  };
};

export const clearCurrentSeatOrder = () => {
  return {
    type: 'CLEAR_CURRENT_SEAT_ORDER'
  };
};

export const addToCurrentTableOrder = (currentSeatOrder, seatNumber) => {
  return {
    type: 'ADD_TO_CURRENT_TABLE_ORDER',
    addToTableInfo: {
      currentSeatOrder: currentSeatOrder,
      seatNumber: seatNumber
    }
  };
};

export const removeFromCurrentTableOrder = (menuItem, seatNumber) => {
  return {
    type: 'REMOVE_FROM_CURRENT_TABLE_ORDER',
    removeItemInfo: {
      menuItem: menuItem,
      seatNumber: seatNumber
    }
  };
};

export const clearCurrentTableOrder = () => {
  return {
    type: 'CLEAR_CURRENT_TABLE_ORDER'
  };
};

export const addMenuItem = (tableNumber, currentTableOrder) => {
  return {
    type: 'ADD_MENU_ITEM',
    menuInfo : {
      tableNumber: tableNumber,
      currentTableOrder: currentTableOrder
    }
  };
};

export const addToAllOrders = (serverName, tableNumber, currentTableOrder) => {
  return {
    type: 'ADD_TO_ALL_ORDERS',
    orderInfo: {
      server: serverName,
      tableNumber: tableNumber,
      currentTableOrder: currentTableOrder
    }
  };
};

export const removeFromAllOrders = (order) => {
  return {
    type: 'REMOVE_FROM_ALL_ORDERS',
    order
  };
};

export const addOrderToCurrentSeat = (order) => {
  return {
    type: 'ADD_ORDER_TO_CURRENT_SEAT',
    order
  };
};
