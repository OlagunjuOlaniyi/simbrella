import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('https://6777ecda80a79bf9190363a1.mockapi.io/api/v1/transactions');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
