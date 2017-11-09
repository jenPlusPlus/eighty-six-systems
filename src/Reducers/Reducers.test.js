import tables from './AddTableReducer';
import allOrders from './AllOrdersReducer';
import currentSeatOrder from './CurrentSeatOrderReducer';
import currentSeat from './CurrentSeatReducer';
import currentTableOrder from './CurrentTableOrderReducer';
import currentTable from './CurrentTableReducer';
import currentUser from './LoginReducer';

describe(`reducers tests`, () => {
  it(`tables: should return tables' initial state and should
      allow to add a table to state`, () => {

      expect(tables(undefined, '')).toEqual([]);

      const addTablesAction = {
        type: 'ADD_TABLE',
        table:{
          tableNumber: '22',
          seats: []
        }
      };

      expect(tables([], addTablesAction)).toEqual([{
        tableNumber: '22',
        seats: []
      }]);

      const addSeatsAction = {
        type: 'ADD_SEAT',
        seatInfo: {
          seatNumber: '1',
          tableNumber: '22',
          order: [
            {item: 'Lamb', price: 29},
            {item: 'Burger', price: 19},
            {item:'Mahi Mahi', price: 27}
          ]
        }
      };

      expect(tables([{
        tableNumber: '22',
        seats: []
      }], addSeatsAction)).toEqual([{
        tableNumber: '22',
        seats: [{
          seatNumber: '1',
          tableNumber: '22',
          order: [
            {item: 'Lamb', price: 29},
            {item: 'Burger', price: 19},
            {item:'Mahi Mahi', price: 27}
          ]
        }]
      }]);

      const addMenuItemAction = {
        type: 'ADD_MENU_ITEM',
        menuInfo : {
          tableNumber: '22',
          currentTableOrder: [
            {
              seatNumber: '1',
              currentSeatOrder: [
                {item: 'Lamb', price: 29},
                {item: 'Burger', price: 19},
                {item:'Mahi Mahi', price: 27}
              ]
            }]
        }
      };

      expect(tables([{
        tableNumber: '22',
        seats: [{seatNumber: '1', tableNumber: '22', order: []}]
      }], addMenuItemAction)).toEqual([{
        tableNumber: '22',
        seats: [{
          seatNumber: '1',
          tableNumber: '22',
          order: [{item: 'Lamb', price: 29},
            {item: 'Burger', price: 19},
            {item:'Mahi Mahi', price: 27}]
        }]
      }]);

    });

  const removeTableAction = {
    type: 'REMOVE_TABLE',
    indexToRemove: 0
  };

  expect(tables([{
    tableNumber: '22',
    seats: [{seatNumber: '1', tableNumber: '22', order: []}]
  }], removeTableAction)).toEqual([]);

  it(`all orders: it should return default state and
    allow to add, remove ,and clear orders`, () => {

      expect(tables(undefined, '')).toEqual([]);

      const addToAllOrdersAction = {
        type: 'ADD_TO_ALL_ORDERS',
        orderInfo: {
          server: 'Jen',
          tableNumber: 22,
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
          ]
        }
      };

      expect(allOrders([], addToAllOrdersAction)).toEqual([{
        server: 'Jen',
        tableNumber: 22,
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
        ]
      }]);

      const removeFromAllOrdersAction = {
        type: 'REMOVE_FROM_ALL_ORDERS',
        order: {
          currentTableOrder: [
            {
              seatNumber: '2',
              currentSeatOrder: [
                {item: 'Scallops', price: 30}
              ]
            }
          ],
          server: "Jen",
          tableNumber: "22"
        }
      };

      expect(allOrders([{
        currentTableOrder: [
          {
            seatNumber: '2',
            currentSeatOrder: [
              {item: 'Scallops', price: 30}
            ]
          }
        ],
        server: "Jen",
        tableNumber: "22"
      }], removeFromAllOrdersAction)).toEqual([]);

    });

  it(`current seat order: it should return default state and
      allow to add, remove ,and clear orders`, () => {

      expect(currentSeatOrder(undefined, '')).toEqual([]);

      const addToCurrentSeatAction = {

        type: 'ADD_TO_CURRENT_SEAT_ORDER',
        menuItem: {
          item: 'Lamb',
          price: 29
        }

      };

      expect(currentSeatOrder([], addToCurrentSeatAction)).toEqual([{
        item: 'Lamb',
        price: 29
      }]);

      const removeFromCurrentSeatAction = {
        type: 'REMOVE_FROM_CURRENT_SEAT_ORDER',
        menuItem: {
          item: 'Lamb',
          price: 29
        }
      };

      expect(currentSeatOrder([{
        item: 'Lamb',
        price: 29
      }], removeFromCurrentSeatAction)).toEqual([]);

      const clearCurrentSeatOrderAction = {
        type: 'CLEAR_CURRENT_SEAT_ORDER'
      };

      expect(currentSeatOrder([{
        item: 'Lamb',
        price: 29
      }], clearCurrentSeatOrderAction)).toEqual([]);

    });

  it(`current seat: it should return default state and
        allow to remove current seat and add orders to seat`, () => {

      expect(currentSeat(undefined, '')).toEqual({});

      const addCurrentSeatAction = {
        type: 'ADD_CURRENT_SEAT',
        seatInfo: {
          seatNumber: '1',
          tableNumber: '22',
          currentSeatOrder: [
            {item: 'Lamb', price: 29},
            {item: 'Burger', price: 19},
            {item:'Mahi Mahi', price: 27}
          ]
        }
      };

      expect(currentSeat({}, addCurrentSeatAction)).toEqual({
        seatNumber: '1',
        tableNumber: '22',
        order: []
      });

      const removeCurrentSeatAction = {
        type: 'REMOVE_CURRENT_SEAT',
        currentSeat: {
          seatNumber: '1',
          tableNumber: '22',
          order: []
        }
      };

      expect(currentSeat({
        seatNumber: '1',
        tableNumber: '22',
        order: []
      }, removeCurrentSeatAction)).toEqual({});

      const addOrderToCurrentSeatAction = {
        type: 'ADD_ORDER_TO_CURRENT_SEAT',
        order: [
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}
        ]

      };

      expect(currentSeat({
        seatNumber: '1',
        tableNumber: '22',
        order: []
      }, addOrderToCurrentSeatAction)).toEqual({
        seatNumber: '1',
        tableNumber: '22',
        order: [
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}
        ]
      });

    });

  it(`current table order: it should return default state and
        allow to remove current seat and add orders to seat`, () => {

      expect(currentTableOrder(undefined, '')).toEqual([]);

      const addToCurrentTableOrderAction =
             {
               type: 'ADD_TO_CURRENT_TABLE_ORDER',
               addToTableInfo: {
                 currentSeatOrder: [
                   {item: 'Lamb', price: 29},
                   {item: 'Burger', price: 19},
                   {item:'Mahi Mahi', price: 27}
                 ],
                 seatNumber: '2'
               }
             };

      expect(currentTableOrder([], addToCurrentTableOrderAction)).toEqual([{
        seatNumber: '2',
        currentSeatOrder:[
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}]
      }]);

      const removeFromCurrentTableOrderAction =
        {
          type: 'REMOVE_FROM_CURRENT_TABLE_ORDER',
          removeItemInfo: {
            menuItem: {item: 'Lamb', price: 29, id: 5},
            seatNumber: '2'
          }
        };

      expect(currentTableOrder([{
        seatNumber: '2',
        currentSeatOrder:[
          {item: 'Lamb', price: 29, id: 5}]
      }], removeFromCurrentTableOrderAction)).toEqual([{
        seatNumber: '2',
        currentSeatOrder:[]
      }]);

      const clearCurrentTableOrderAction =
        {
          type: 'CLEAR_CURRENT_TABLE_ORDER'
        };

      expect(currentTableOrder([{
        seatNumber: '2',
        currentSeatOrder:[
          {item: 'Lamb', price: 29},
          {item: 'Burger', price: 19},
          {item:'Mahi Mahi', price: 27}]
      }], clearCurrentTableOrderAction)).toEqual([]);
    });


  it(`current table: it should return default state and
        allow to add a current table and remove a current table`, () => {
      expect(currentTable(undefined, '')).toEqual({});

      const addTableAction = {
        type: 'ADD_CURRENT_TABLE',
        currentTable: {
          tableNumber: '33',
          seats: {}
        }
      };

      expect(currentTable({}, addTableAction)).toEqual({
        tableNumber: '33',
        seats: {}
      });

      const removeCurrentTableAction = {
        type: 'REMOVE_CURRENT_TABLE'
      };

      expect(currentTable({
        tableNumber: '33',
        seats: {}
      }, removeCurrentTableAction)).toEqual({});

    });

  it(`login: it should return default state and
              allow user to log in and log out`, () => {

      expect(currentUser(undefined, '')).toEqual({});

      const loginUserAction = {
        type: 'LOGIN_USER',
        currentUser: {
          name: 'Jen',
          loginCode: '0000'
        }
      };

      expect(currentUser({}, loginUserAction)).toEqual({
        name: 'Jen',
        loginCode: '0000'
      });

      const logoutUserAction = {
        type: 'LOGOUT_USER',
        currentUser: {
          name: 'Jen',
          loginCode: '0000'
        }
      };

      expect(currentUser({
        name: 'Jen',
        loginCode: '0000'
      }, logoutUserAction)).toEqual({});



    });
});
