import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-hot-toast';

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (Item) => Item.id === action.payload.id
      );

      if (itemIndex > 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };

        state.cartItem.push(temp);
      }

      toast.success(`${action.payload.name} added in the cart`);

      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setRemoveItemFromCart: (state) => {
      state.cartItem = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
      toast.success(`cart cleaned`);
    },
    setItemRemoveCart: (state, action) => {
      const removeItems = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItem = removeItems;
      localStorage.setItem('cart', JSON.stringify(state.cartItem));

      toast.success(`${action.payload.name} removed from the cart`);
    },
    setIncreaseItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };

        state.cartItem.push(temp);
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setDecreaseItemFromCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setGetTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        quantity += item.cartQuantity;
        console.log(quantity);
        total = quantity * item.price;
        console.log(total);
      });

      state.totalQuantity = quantity;
      state.totalPrice = total;
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItem,
  setDecreaseItemFromCart,
  setGetTotals,
  setItemRemoveCart,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartItem = (state) => state.cart.cartItem;

export const selectTotalQuantity = (state) => state.cart.totalQuantity;

export const selectTotalPrice = (state) => state.cart.totalPrice;

export default CartSlice.reducer;
