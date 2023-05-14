import React from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  selectTotalPrice,
  selectCartShipTotal,
  setShipTotal,
} from '../app/CartSlice';
import { useSelector } from 'react-redux';

const Order = ({ cartItem }) => {
  const dispatch = useDispatch();
  console.log(cartItem);
  const shipTotal = useSelector(selectCartShipTotal);

  const totalAmount = useSelector(selectTotalPrice);

  useEffect(() => {
    dispatch(setShipTotal(totalAmount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className='p-5'>
        <h1 className='text-3xl font-bold text-green-700'>
          Your Order Details
        </h1>
        {cartItem.map((item, index) => {
          return (
            <div key={index} className=' py-5 px-3'>
              <div className='bg-red-100 flex justify-between items-center px-2 py-3 rounded-lg'>
                <div>
                  <img
                    src={item.imgSrc}
                    alt={item.id}
                    className='w-[100px] h-[100px]'
                  />
                </div>
                <div>
                  <p className='font-extrabold text-red-700'>{item.name}</p>
                  <p className='font-semibold text-green-900'>${item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='text-lg px-2 text-slate-900'>
          <h1 className='text-slate-900 font-extrabold text-3xl pb-5'>
            Summary
          </h1>
          <hr />
          <div className='flex flex-col gap-3 py-2'>
            <div className='flex justify-between'>
              <p className=' font-semibold'>Subtotal:</p>
              <p>$ {totalAmount}</p>
            </div>
            <div className='flex justify-between'>
              <p className=' font-semibold'>Shipping:</p>
              <p>$10</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p className=' font-semibold'> Total:</p>
              <p>${shipTotal}</p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Order;
