import React, { useEffect, useState } from 'react';

import { BiHeart, BiSearch } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { setOpenCart, selectTotalQuantity } from '../app/CartSlice';
import { useNavigate } from 'react-router-dom';

import profileImage from '../assets/3135715.png';

const Header = ({ filterNames }) => {
  const [navState, setNavState] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const totalQuantity = useSelector(selectTotalQuantity);

  // get the input value
  const changeInput = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  // if screen is scrollY>30 fixed navbar will come orelse it wont happen
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  // cartsection open function
  const isCartOpen = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`container flex items-center justify-between bg-orange-100 opacity-100 z-30
        
${
  !navState
    ? 'absolute top-0 left-0 right-0'
    : 'fixed left-0 right-0 blur-effect-theme'
}

        `}
      >
        <div className='grid items-center relative'>
          <img
            src={profileImage}
            alt=''
            className='grid items-center  w-12 h-12  '
            onClick={() => {
              navigate('/profile');
            }}
          />
        </div>
        <div className='flex items-center gap-2 relative'>
          <input
            type='text'
            value={name}
            onChange={changeInput}
            placeholder='search....'
            className='capitalize rounded-xl
            border-2 
             border-orange-500 font-semibold 
           
            text-orange-500 lg:w-[55vw] py-3 px-2 text-xl xl:w-[70vw]
            md:w-[45vw] py-1 px-2 text-sm  '
          />
          <BiSearch
            className='icon-style absolute right-2 text-orange-500'
            onClick={() => filterNames(name)}
          />
        </div>
        <div className='relative'>
          <BsFillCartFill
            onClick={isCartOpen}
            className='icon-style text-orange-500'
          />
          <div className='absolute top-[-15px] right-[-10px] text-lg px-1 rounded-full bg-slate-50'>
            <p className='text-orange-500'>{totalQuantity}</p>
          </div>
        </div>
        <div>
          <BiHeart
            onClick={() => {
              navigate('/history');
            }}
            className={`icon-style text-orange-500 ${navState && ''}`}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
