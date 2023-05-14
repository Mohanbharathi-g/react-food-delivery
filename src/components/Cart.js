import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import {
  selectCartItem,
  selectCartState,
  setGetTotals,
  selectTotalQuantity,
  selectTotalPrice,
} from '../app/CartSlice';
import CartCount from '../cart/CartCount';
import CartEmpty from '../cart/CartEmpty';
import CartItem from '../cart/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const totalQuantity = useSelector(selectTotalQuantity);

  const totalPrice = useSelector(selectTotalPrice);

  const cartItem = useSelector(selectCartItem);

  const navigate = useNavigate();

  // get the totals every time cartItem will update
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItem, dispatch]);

  return (
    <>
      <div
        className={`z-[100] opacity-100 fixed right-0 top-0 blur-effect-theme  w-full max-w-lg h-screen bottom-0
       ${ifCartState ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
          <CartCount totalQuantity={totalQuantity} />
          {cartItem?.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className='flex flex-col gap-2 w-full h-2 '>
              {cartItem.map((item, index) => {
                return (
                  <div key={index} className='h-[85vh]'>
                    <CartItem {...item} totalPrice={totalPrice} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className='fixed bottom-0 right-0 w-full bg-orange-100 w-lg m-auto px-5 py-2 grid items-center z-[250] mb-'>
          <div className='flex items-center justify-between'>
            <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
            <h1 className='text-lg font-bold rounded bg-theme-cart text-slate-900 px-1 py-0.5'>
              ${totalPrice}
            </h1>
          </div>
          <div className='grid items-center gap-2'>
            <p className='text-sm font-medium text-center'>
              Taxes and Shipping Will Calculate At Shipping
            </p>
            <button
              type='button'
              className='button-theme bg-theme-cart 
               font-bold rounded-xl text-slate-100 bg-slate-900 py-3'
              onClick={() => {
                navigate('/details');
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
