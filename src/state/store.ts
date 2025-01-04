import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import transactionReducer from './transactionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // transactions: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
