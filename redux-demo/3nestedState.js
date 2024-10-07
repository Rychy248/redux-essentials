const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
  name:'Vishwas',
  address:{
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
};

const STREET_UPDATE = 'STREET_UPDATE';
const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street
  }
};

// const reducer = (state = initialState, action) => { //WITHOUT IMMER
//   switch (action.type) {
//     case STREET_UPDATE:
//       return {
//         ...state,
//         address:{
//           ...state.address,
//           street: action.payload
//         }
//       };
  
//     default: return state;
//   };
// };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      return produce(state,(draft)=>{
        draft.address.street = action.payload
      });
    default: return state;
  };
};

// ---------------- using redux
const store = redux.createStore(reducer);

const user = redux.bindActionCreators(
  { updateStreet },
  store.dispatch
);

console.log(store.getState());

const unsubscribe = store.subscribe( ()=> { console.log(`State update: ${JSON.stringify(store.getState())}`) } );

user.updateStreet('456 Main st');

unsubscribe();