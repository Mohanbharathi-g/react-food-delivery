import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  setDecreaseItemFromCart,
  setIncreaseItem,
  setItemRemoveCart,
} from '../app/CartSlice';

const CartItem = ({
  id,
  itemId,
  name,
  imgSrc,
  price,
  ratings,
  cartQuantity,
}) => {
  const dispatch = useDispatch();

  // increase the items...the parameters are called action.payload
  const increaseItem = () => {
    dispatch(
      setIncreaseItem({
        id,
        itemId,
        name,
        imgSrc,
        price,
        ratings,
        cartQuantity,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(
      setDecreaseItemFromCart({
        id,
        itemId,
        name,
        imgSrc,
        price,
        ratings,
        cartQuantity,
      })
    );
  };
  const removesItem = () => {
    dispatch(
      setItemRemoveCart({
        id,
        itemId,
        name,
        imgSrc,
        price,
        ratings,
        cartQuantity,
      })
    );
  };
  return (
    <>
      <div>
        <div className='flex items-center justify-between px-3 py-2 blur-effect-theme'>
          <div>
            <img src={imgSrc} alt={name} className='w-20' />
          </div>
          <div className='grid gap-2'>
            <h1 className='text-lg font-semibold text-orange-600'>{name}</h1>
            <p className='text-sm font-semibold flex items-center gap-2'>
              {ratings}
              <BsStarFill className='text-[#facc15]' />
            </p>
            <div className='flex items-center gap-2'>
              <button
                onClick={decreaseItem}
                className='bg-slate-900 p-1 text-slate-100 rounded-md'
              >
                <AiOutlineMinus />
              </button>
              <h1 className='bg-slate-900 px-3 text-slate-100 rounded-md'>
                {cartQuantity}
              </h1>
              <button
                onClick={increaseItem}
                className='bg-slate-900 p-1 text-slate-100 rounded-md'
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center'>
            <button
              className='grid items-center bg-slate-900  text-slate-100 rounded-md px-1 py-1'
              onClick={removesItem}
            >
              <MdClear />
            </button>
            <h1 className='bg-slate-900 p-1 text-slate-100 rounded-md'>
              $ {price}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
