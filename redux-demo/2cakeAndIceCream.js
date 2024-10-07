

const redux =  require('redux');

// -------------- ACTIONS
const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED';
const ICE_CREAM_RESTOCKED = 'ICE_CREAM_RESTOCKED';

function orderCake(qty=1) {
  return {
    type:CAKE_ORDER,
    payload:qty
  };
};

function restockCake(qty=1) {
  return {
    type:CAKE_RESTOCKED,
    payload:qty
  };
};

function orderIceCream(qty=1) {
  return {
    type:ICE_CREAM_ORDERED,
    payload:qty
  };
};

function restockIceCream(qty=1) {
  return {
    type:ICE_CREAM_RESTOCKED,
    payload: qty
  };
};


// -------------- INITIAL STATE
// const initialState = {
//   numOfCakes:10,
//   numOfIceCreams:10,
// };

const initialCakeState = {
  numOfCakes:10,
};
const initialIceCreamState = {
  numOfIceCreams:10,
};


// -------------- REDUCER
// const cakeReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDER:
//       return ({
//         ...state,
//         numOfCakes: state.numOfCakes - action.payload
//       });

//     case CAKE_RESTOCKED:
//       return ({
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload
//       });
    
//     case ICE_CREAM_ORDERED:
//       return ({
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - action.payload
//       });

//     case ICE_CREAM_RESTOCKED:
//       return ({
//         ...state,
//         numOfIceCreams: state.numOfIceCreams + action.payload
//       });
  
//     default:
//       return state;
//   }
// };
const cakeReducer = (state=initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return ({
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      });

    case CAKE_RESTOCKED:
      return ({
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      });
      
    default: return state; ;
  }
};

const iceCreamReducer = (state=initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return ({
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload
      });

    case ICE_CREAM_RESTOCKED:
      return ({
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload
      });
  
    default:
      return state;
  }
};


// -------------- REDUX
function main() {
  // combining multiple reducers
  const rootReducer = redux.combineReducers({
    cake:cakeReducer, 
    iceCream:iceCreamReducer
  });
  // adding the root reducer
  const store = redux.createStore(rootReducer);

  // adding a listener
  const unsubscribeLog = store.subscribe(()=>{ 
    console.log(`State was update: `,JSON.stringify(store.getState()));
  });

  // biding the reducers
  const cakeStore = redux.bindActionCreators(
    {orderCake, restockCake, orderIceCream, restockIceCream},
    store.dispatch
  );

  cakeStore.orderCake();
  cakeStore.orderCake();
  cakeStore.restockCake(10);
  cakeStore.orderIceCream();
  cakeStore.orderIceCream();
  cakeStore.restockIceCream(5); 
};

module.exports = main();