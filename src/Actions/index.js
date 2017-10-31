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

export const addSeat = (seat) => {
  return {
    type: 'ADD_SEAT',
    seat
  };
};

export const addCurrentTable = (currentTable) => {
  return {
    type: 'ADD_CURRENT_TABLE',
    currentTable
  };
};
