// import redux from 'redux';
const redux = require('redux');

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake() {
  return {
    type:CAKE_ORDERED,
    payload: 1
  };
};

function restockCake(quantity=1) {
  return {
    type:CAKE_RESTOCKED,
    payload: quantity
  };
};


// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
  anotherProperty:0,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: --state.numOfCakes
      };
  
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      };

    default:
      return state;
      break;
  };

};

// ------------------------------------------------------------- Using redux, immediately execution
module.exports = (()=>{
  const store = redux.createStore(reducer);

  console.log('initial state: ',store.getState());

  const unsubscribe = store.subscribe(()=> console.log('updated state: ', store.getState()));
  store.dispatch(orderCake());
  store.dispatch(orderCake());
  store.dispatch(orderCake());
  unsubscribe();
  store.dispatch(orderCake());
  store.dispatch(orderCake());

  console.log('Actually state: ',store.getState());
  store.subscribe(()=> console.log('updated state: ', store.getState()));
  store.dispatch(restockCake(5));
  store.dispatch(restockCake(10));

  const actions = redux.bindActionCreators( // Other way to reach the same: store.dispatch(ACTION_FUNCTION_CREATOR(PARAM));
    {orderCake, restockCake},
    store.dispatch
  );
  actions.orderCake()
  actions.orderCake()
  actions.restockCake(10)
});

