export const loginUser = (currentUser) => {
  return {
    type: 'LOGIN_USER',
    currentUser
  };
};
