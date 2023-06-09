import React from 'react';
import { AiOutlineHeart, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../app/CartSlice';

const Item = ({ id, itemId, imgSrc, name, ratings, price }) => {
  const dispatch = useDispatch();

  const onAddingItem = () => {
    const item = { id, imgSrc, itemId, price, ratings, name };

    dispatch(setAddItemToCart(item));
  };
  return (
    <>
      <div
        key={id}
        className='grid items-center p-5 
      rounded-xl shadow-xl bg-slate-50'
      >
        <div className='relative'>
          <img
            src={imgSrc}
            alt={itemId}
            className=' sm:w-full lg:w-1/2 transition-all duration-300 hover:scale-110'
          />
          <div>
            <AiOutlineHeart
              className='absolute top-2 right-2 w-8 h-6 rounded-full  cursor-pointer
            text-orange-500 hover:text-red-500'
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <h1 className='text-xl lg:text-2xl font-bold text-orange-500'>
              {name}
            </h1>
            <p className='flex items-center gap-3 text-lg font-bold text-orange-500'>
              {ratings}

              <span>
                <AiOutlineStar className='w- h-6' />
              </span>
            </p>
            <h1 className='text-2xl font-semibold text-orange-500'>${price}</h1>
          </div>
          <div className='  px-1 rounded-full'>
            <AiOutlinePlus
              onClick={onAddingItem}
              className='w-8 h-8 
              bg-slate-100 rounded-md text-orange-500 
              font-extrabold
              hover:scale-90
              '
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
