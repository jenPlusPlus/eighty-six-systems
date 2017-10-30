const currentUser = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_USER':
    return {
      name: action.currentUser.name,
      loginCode: action.currentUser.loginCode
    };
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};

export default currentUser;
