import { configureStore } from '@reduxjs/toolkit';
import ownerReducer from './features/owner/ownerSlice';
import businessReducer from './features/business/businessSlice';
import tradingReducer from './features/trading/tradingSlice';
import bankReducer from './features/bank/bankSlice';

const store = configureStore({
  reducer: {
    owner: ownerReducer,
    business: businessReducer,
    trading: tradingReducer,
    bank: bankReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
