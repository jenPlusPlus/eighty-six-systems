import * as actions from './index.js';

describe('actions testing', () => {

  const currentUser =   {
    name: 'Jen',
    loginCode: '0000'
  };

  const table = {
    tableNumber: '22',
    seats: []
  };

  const indexToRemove = 1;

  const seatToAdd = {
    seatNumber: '1',
    order: []
  };

  const currentTable = {tableNumber: '22'};

  const currentSeat = {
    tableNumber: '22',
    seatNumber: '1',
    order: [
      {item: 'Lamb', price: 29},
      {item: 'Burger', price: 19},
      {item:'Mahi Mahi', price: 27}
    ]
  };

  const menuItem = {
    item: 'Lamb',
    price: 29
  };

  const toAddToCurrentTableOrder = [
    {item: 'Lamb', price: 29},
    {item: 'Burger', price: 19},
    {item:'Mahi Mahi', price: 27}
  ];

  const seatNumber = '1';

  const tableNumber = '22';

  const currentTableOrder = [
    {
      seatNumber: '1',
      currentSeatOrder: [
        {item: 'Lamb', price: 29},
        {item: 'Burger', price: 19},
        {item:'Mahi Mahi', price: 27}
      ]
    },
    {
      seatNumber: '2',
      currentSeatOrder: [
        {item: 'Scallops', price: 30}
      ]
    }
  ];

  const serverName = 'Jen';

  const order = {
    currentTableOrder: [
      {
        seatNumber: '1',
        currentSeatOrder: [
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}
        ]
      },
      {
        seatNumber: '2',
        currentSeatOrder: [
          {item: 'Scallops', price: 30}
        ]
      }
    ],
    server: "Jen",
    tableNumber: "11"
  };

  it(`should login a user`, () => {

    const expectation = actions.loginUser(currentUser);

    expect(expectation.type).toEqual('LOGIN_USER');
    expect(expectation.currentUser).toEqual(currentUser);
  });

  it(`should logout a user`, () => {

    const expectation = actions.logoutUser(currentUser);

    expect(expectation.type).toEqual('LOGOUT_USER');
    expect(expectation.currentUser).toEqual(currentUser);
  });

  it(`should add a table`, () => {

    const expectation = actions.addTable(table);

    expect(expectation.type).toEqual('ADD_TABLE');
    expect(expectation.table).toEqual(table);
  });

  it(`should remove a table`, () => {

    const expectation = actions.removeTable(indexToRemove);

    expect(expectation.type).toEqual('REMOVE_TABLE');
    expect(expectation.indexToRemove).toEqual(indexToRemove);
  });

  it(`should add a seat`, () => {

    const expectation = actions.addSeat(tableNumber, seatToAdd);

    expect(expectation.type).toEqual('ADD_SEAT');
    expect(expectation.seatInfo.seatNumber).toEqual(seatToAdd.seatNumber);
    expect(expectation.seatInfo.tableNumber).toEqual(tableNumber);
    expect(expectation.seatInfo.order).toEqual(seatToAdd.order);
  });

  it(`should add the current table`, () => {

    const expectation = actions.addCurrentTable(currentTable);

    expect(expectation.type).toEqual('ADD_CURRENT_TABLE');
    expect(expectation.currentTable).toEqual(currentTable);

  });

  it(`should add the current seat`, () => {

    const expectation = actions.addCurrentSeat(currentSeat);

    expect(expectation.type).toEqual('ADD_CURRENT_SEAT');
    expect(expectation.seatInfo.seatNumber).toEqual(currentSeat.seatNumber);
    expect(expectation.seatInfo.tableNumber).toEqual(currentSeat.tableNumber);
    expect(expectation.seatInfo.order).toEqual(currentSeat.order);

  });

  it(`should add to the current seat order`, () => {

    const expectation = actions.addToCurrentSeatOrder(menuItem);

    expect(expectation.type).toEqual('ADD_TO_CURRENT_SEAT_ORDER');
    expect(expectation.menuItem).toEqual(menuItem);

  });

  it(`should remove from the current seat order`, () => {

    const expectation = actions.removeFromCurrentSeatOrder(menuItem);

    expect(expectation.type).toEqual('REMOVE_FROM_CURRENT_SEAT_ORDER');
    expect(expectation.menuItem).toEqual(menuItem);

  });

  it(`should clear the current seat order`, () => {

    const expectation = actions.clearCurrentSeatOrder();

    expect(expectation.type).toEqual('CLEAR_CURRENT_SEAT_ORDER');

  });

  it(`should add to the current table order`, () => {

    const expectation = actions.addToCurrentTableOrder(
      toAddToCurrentTableOrder,
      seatNumber);

    expect(expectation.type).toEqual('ADD_TO_CURRENT_TABLE_ORDER');
    expect(expectation.addToTableInfo.currentSeatOrder)
      .toEqual(toAddToCurrentTableOrder);
    expect(expectation.addToTableInfo.seatNumber).toEqual(seatNumber);

  });

  it(`should remove from the current table order`, () => {

    const expectation = actions
      .removeFromCurrentTableOrder(menuItem, seatNumber);

    expect(expectation.type).toEqual('REMOVE_FROM_CURRENT_TABLE_ORDER');
    expect(expectation.removeItemInfo.menuItem).toEqual(menuItem);
    expect(expectation.removeItemInfo.seatNumber).toEqual(seatNumber);

  });

  it(`should clear the current table order`, () => {

    const expectation = actions.clearCurrentTableOrder();

    expect(expectation.type).toEqual('CLEAR_CURRENT_TABLE_ORDER');

  });

  it(`should add a menu item`, () => {

    const expectation = actions.addMenuItem(tableNumber, currentTableOrder);

    expect(expectation.type).toEqual('ADD_MENU_ITEM');
    expect(expectation.menuInfo.tableNumber).toEqual(tableNumber);
    expect(expectation.menuInfo.currentTableOrder).toEqual(currentTableOrder);
  });

  it(`should add to all orders`, () => {

    const expectation = actions.addToAllOrders(serverName,
      tableNumber, currentTableOrder);

    expect(expectation.type).toEqual('ADD_TO_ALL_ORDERS');
    expect(expectation.orderInfo.tableNumber).toEqual(tableNumber);
    expect(expectation.orderInfo.server).toEqual(serverName);
    expect(expectation.orderInfo.currentTableOrder).toEqual(currentTableOrder);
  });

  it(`should remove from all orders`, () => {

    const expectation = actions.removeFromAllOrders(order);

    expect(expectation.type).toEqual('REMOVE_FROM_ALL_ORDERS');
    expect(expectation.order).toEqual(order);

  });

  it(`should add order to current seat`, () => {

    const expectation = actions.addOrderToCurrentSeat(order);

    expect(expectation.type).toEqual('ADD_ORDER_TO_CURRENT_SEAT');
    expect(expectation.order).toEqual(order);

  });

});
