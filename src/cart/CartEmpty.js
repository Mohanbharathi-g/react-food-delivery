import React from 'react';
import { useDispatch } from 'react-redux';
import { setCloseCart } from '../app/CartSlice';

const CartEmpty = () => {
  const dispatch = useDispatch();

  const isMenuOpen = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  return (
    <>
      <div className='absolute top-52 left-20 grid items-center gap-7'>
        <h1 className='text-3xl font-bold text-orange-500 capitalize'>
          please order your food
        </h1>
        <button
          onClick={isMenuOpen}
          type='button'
          className='text-2xl bg-orange-500 font-bold border-2 border-orange-500 px-3 py-1 uppercase
          text-slate-100 rounded-xl cursor-pointer'
        >
          back{' '}
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
