import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading:false,
  users:[],
  error:''
};

// Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', 
  () => axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => res.data )
    .catch(e => {
      // console.log(e);
      throw e;
    })
);

const userSlice = createSlice({
  name:'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message;
    })
  },
})

export default userSlice.reducer;
export {
  fetchUsers
}