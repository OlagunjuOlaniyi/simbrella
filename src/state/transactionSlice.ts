import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await axios.get('https://6777ecda80a79bf9190363a1.mockapi.io/api/v1/transactions');
  return response.data;
});

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default transactionSlice.reducer;
