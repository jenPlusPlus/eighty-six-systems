const seats = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SEAT':
    return [...state, action.seat];
  default:
    return state;
  }
};

export default seats;
