import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice.js';

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
