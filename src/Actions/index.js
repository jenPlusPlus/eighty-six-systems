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
