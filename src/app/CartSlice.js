import { createSlice } from '@reduxjs/toolkit';
// import { act } from '@testing-library/react';

import { toast } from 'react-hot-toast';

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
  imageAsset: null,
  userName: '',
  mail: '',
  number: null,
  address: '',
  user: null,
  userId: null,
  docId: null,
  lastName: null,
  city: null,
  cvv: null,
  postalCode: null,
  year: null,
  cardNumber: null,
  details: localStorage.getItem('details')
    ? JSON.parse(localStorage.getItem('details'))
    : [],
  orders: [],
  cartShipTotal: 0,
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

    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setMail: (state, action) => {
      state.mail = action.payload;
    },

    setNumber: (state, action) => {
      const inputValue = action.payload;

      state.number = inputValue;

      // if (inputValue.length > 10) {
      //   state.number = inputValue.slice(0, 10);
      // } else {
      //   state.number = inputValue;
      // }
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setImageAsset: (state, action) => {
      console.log(action.payload);
      state.imageAsset = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setDocId: (state, action) => {
      state.docId = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCvv: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 3) {
        state.cvv = inputValue.slice(0, 3);
        toast.error('must be 3 digits');
      } else {
        state.cvv = inputValue;
      }
    },
    setPostalCode: (state, action) => {
      const inputValue = action.payload;

      if (inputValue.length > 6) {
        state.postalCode = inputValue.slice(0, 6);
      } else {
        state.postalCode = inputValue;
      }
    },
    setYear: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 4) {
        state.year = inputValue.slice(0, 4);
        toast.error('Must be 4 digits');
      } else {
        state.year = inputValue;
      }
    },
    setCardNumber: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 16) {
        state.cardNumber = inputValue.slice(0, 16);
        toast.error('card number only 16 digits');
      } else {
        state.cardNumber = inputValue;
        // toast.success('card value is entered');
      }
    },
    setDetails: (state, action) => {
      console.log('hiii');
      console.log(action.payload);
      const {
        name,
        mail,
        address,
        number,
        lastName,
        city,
        postalCode,
        cardNumber,
        year,
        cvv,
      } = action.payload;
      state.details = {
        name,
        mail,
        lastName,
        number,
        address,
        city,
        year,
        cvv,
        postalCode,
        cardNumber,
      };
      localStorage.setItem('details', JSON.stringify(state.details));
      toast.success('your orders is successfully added ');
    },
    setOrders: (state, action) => {
      console.log(action.payload);
      const temp = action.payload;

      state.orders.push(...temp);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setShipTotal: (state, action) => {
      state.cartShipTotal = action.payload + 10;
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
  setNumber,
  setMail,
  setAddress,
  setUserName,
  setImageAsset,
  setUser,
  setUserId,
  setDocId,
  setLastName,
  setCity,
  setCvv,
  setPostalCode,
  setYear,
  setCardNumber,
  setDetails,
  setOrders,
  setShipTotal,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartItem = (state) => state.cart.cartItem;

export const selectTotalQuantity = (state) => state.cart.totalQuantity;

export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectImageAsset = (state) => state.cart.imageAsset;
export const selectUserName = (state) => state.cart.userName;
export const selectMail = (state) => state.cart.mail;
export const selectNumber = (state) => state.cart.number;
export const selectAddress = (state) => state.cart.address;

export const selectUser = (state) => state.cart.user;
export const selectUserId = (state) => state.cart.userId;
export const selectDocId = (state) => state.cart.docId;
export const selectLastName = (state) => state.cart.lastName;
export const selectCity = (state) => state.cart.city;
export const selectCvv = (state) => state.cart.cvv;
export const selectPostalCode = (state) => state.cart.postalCode;
export const selectYear = (state) => state.cart.year;
export const selectCardNumber = (state) => state.cart.cardNumber;
export const selectCartShipTotal = (state) => state.cart.cartShipTotal;
export const selectOrders = (state) => state.cart.orders;
export const selectDetails = (state) => state.cart.details;

export default CartSlice.reducer;
