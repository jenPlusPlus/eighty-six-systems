const tables = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TABLE':
    return [...state, action.table];
  case 'ADD_SEAT':
    return (
      state.map(table => {
console.log('table: ', table)
        console.log('seat: ', action.seatInfo);
        return table.tableNumber === action.seatInfo.tableNumber ?
        // transform the one with a matching id

      {...table, seats: [...table.seats, action.seatInfo]} :
        // otherwise return original todo
      table;
    })
    );
  default:
    return state;
  }
};

export default tables;

// case "COMPLETE_TASK":
//     return {
//         ...state,
//         todos: state.todos.map(todo => todo.id === action.id ?
//             // transform the one with a matching id
//             { ...todo, completed: action.completed } :
//             // otherwise return original todo
//             todo
//         )
//     };
