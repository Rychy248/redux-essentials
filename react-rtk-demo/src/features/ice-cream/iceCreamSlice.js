
import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numOfIceCream:10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      --state.numOfIceCream;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase("cake/ordered", (state) => {
    //   // it took the generated name, it'll could be visible with redux-logger
    //   --state.numOfIceCream;
    // }); //option one
    builder.addCase(cakeOrdered, state =>{
      --state.numOfIceCream;
    }); // option two, adding directly the action to refer
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;