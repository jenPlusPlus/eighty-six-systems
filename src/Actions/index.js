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
