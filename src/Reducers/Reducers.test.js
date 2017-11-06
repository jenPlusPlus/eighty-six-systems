import tables from './AddTableReducer';
import allOrders from './AllOrdersReducer';
import currentSeatOrder from './CurrentSeatOrderReducer';
import currentSeat from './CurrentSeatReducer';

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

  it(`orders: it should return default state and
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

      // const removeFromAllOrdersAction = {
      //   type: 'REMOVE_FROM_ALL_ORDERS',
      //   order: {
      //     currentTableOrder: [
      //       {
      //         seatNumber: '2',
      //         currentSeatOrder: [
      //           {item: 'Scallops', price: 30}
      //         ]
      //       }
      //     ],
      //     server: "Jen",
      //     tableNumber: "22"
      //   }
      // };
      // expect(allOrders([{
      //   currentTableOrder: [
      //     {
      //       seatNumber: '2',
      //       currentSeatOrder: [
      //         {item: 'Scallops', price: 30}
      //       ]
      //     }
      //   ],
      //   server: "Jen",
      //   tableNumber: "22"
      // }], removeFromAllOrdersAction)).toEqual([]);

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

      // const removeFromCurrentSeatAction = {
      //   type: 'REMOVE_FROM_CURRENT_SEAT_ORDER',
      //   menuItem: {
      //     item: 'Lamb',
      //     price: 29
      //   }
      // };

      // expect(currentSeatOrder([{
      //   item: 'Lamb',
      //   price: 29
      // }], removeFromCurrentSeatAction)).toEqual([]);

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

      // const addOrderToCurrentSeatAction = {
      //   type: 'ADD_CURRENT_SEAT',
      //   seatInfo: {
      //     seatNumber: '1',
      //     tableNumber: '22',
      //     order: [
      //       {item: 'Lamb', price: 29},
      //       {item: 'Burger', price: 19},
      //       {item:'Mahi Mahi', price: 27}
      //     ]
      //   }
      // };
      //
      // expect(currentSeat({}, addOrderToCurrentSeatAction)).toEqual({
      //   seatNumber: '1',
      //   tableNumber: '22',
      //   order: [
      //     {item: 'Lamb', price: 29},
      //     {item: 'Burger', price: 19},
      //     {item:'Mahi Mahi', price: 27}
      //   ]
      // });

    });

});
