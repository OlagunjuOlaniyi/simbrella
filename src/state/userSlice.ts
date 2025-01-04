import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = [{
  "id": 1,
  "name": "John Doe",
  "balance": 1200.5,
  "recentTransactions": [
    { "id": 1, "type": "credit", "amount": 300, "date": "2023-12-01" },
    { "id": 2, "type": "debit", "amount": 150, "date": "2023-11-30" }
  ]
}]

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
