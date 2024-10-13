
import { configureStore } from '@reduxjs/toolkit';

// const reduxLogger = require('redux-logger');
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/ice-cream/iceCreamSlice';
import userSlice from '../features/users/userSlice';

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer:{
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    user: userSlice
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // concatenating middlewares
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;