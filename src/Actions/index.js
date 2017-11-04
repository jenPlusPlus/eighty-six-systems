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

export const addMenuItem = (seatNumber, menuItem) => {
  return {
    type: 'ADD_MENU_ITEM',
    menuInfo : {
      seatNumber: seatNumber,
      menuItem: menuItem
    }
  };
};
