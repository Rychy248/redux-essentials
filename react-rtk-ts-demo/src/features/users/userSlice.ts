import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type User = {
  id:number;
  name:string;
};

type InitialState = {
  loading:boolean;
  users: User[];
  error:string;
};

const initialState:InitialState = {
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
  reducers:{},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
      state.loading = false;
      state.error = '';
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) =>{
      state.loading = false;
      state.error = action.error.message || 'Something wrong happens!';
    });
  },
})

export default userSlice.reducer;
export {
  fetchUsers
};