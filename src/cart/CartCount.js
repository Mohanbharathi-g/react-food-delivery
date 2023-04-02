import React from 'react';
import { useDispatch } from 'react-redux';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { MdOutlineClear } from 'react-icons/md';
import { setCloseCart, setRemoveItemFromCart } from '../app/CartSlice';

const CartCount = ({ totalQuantity }) => {
  const dispatch = useDispatch();

  const onCloseCart = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const removeItems = () => {
    dispatch(
      setRemoveItemFromCart({
        cartItem: [],
      })
    );
  };
  return (
    <>
      <div className='flex items-center justify-between p-3 '>
        <div className='flex gap-2'>
          <button
            onClick={onCloseCart}
            className=' px-1 text-slate-900 text-lg'
          >
            <BsChevronDoubleLeft />
          </button>
          <h1 className='text-xl font-semibold'>{totalQuantity} items</h1>
        </div>
        <div>
          <button className='bg-slate-900 p-2 text-slate-100 rounded-md'>
            <MdOutlineClear onClick={removeItems} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
