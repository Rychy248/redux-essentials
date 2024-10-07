const produce = require('immer').produce;
const redux = require('redux');
const { createStore, bindActionCreators, applyMiddleware  } = redux;
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').thunk;

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => ({ type:FETCH_USERS_REQUESTED });

const fetchUsersSucceeded = users => {
  return {
    type:FETCH_USERS_SUCCEEDED,
    payload: users
  };
};

const fetchUsersFailed = errorMsg => {
  return {
    type:FETCH_USERS_FAILED,
    payload:errorMsg
  };
};


const reducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) =>{
        draft.loading = true
      });
    ;
    
    case FETCH_USERS_SUCCEEDED:
      return {
        users:payload,
        loading:false,
        error:'',
      };
    ;

    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload;
      });
    ;
  
    default:
      return state;
    ;
  }
};

const initialState = {
  loading: true,
  users:[],
  error:''
};

function main() {
  const fetchUsers = () => {
    return function(dispatch){ // this func is managed by the reduxThunMiddleware, 
      // And it's accept a not pure function
      // Also this could access the scope of caller function. It's mean actions access

      dispatch(fetchUsersRequest()); // set loading to true

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then( res  =>{
        const users = res.data.map( user => user.id );
        dispatch( fetchUsersSucceeded(users) );
      }).catch(
        e => dispatch(fetchUsersFailed(e.message))
      );
    };
  };

  const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  const users = bindActionCreators(
    {fetchUsersSucceeded, fetchUsersRequest, fetchUsersFailed, fetchUsers},
    store.dispatch
  );

  store.subscribe( () => { console.log(store.getState()) });
  users.fetchUsers();  

};

module.exports = main;
