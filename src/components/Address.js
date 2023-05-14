import React from 'react';
import { toast } from 'react-hot-toast';

import {
  setUserName,
  setMail,
  setAddress,
  setNumber,
  setCity,
  setYear,
  setCvv,
  setCardNumber,
  selectAddress,
  selectUserName,
  selectMail,
  selectNumber,
  selectLastName,
  selectPostalCode,
  selectCity,
  selectCvv,
  selectYear,
  selectCartItem,
  setLastName,
  selectCardNumber,
  setPostalCode,
  setDetails,
  setOrders,
  setRemoveItemFromCart,
} from '../app/CartSlice';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectUserName);
  // const order = useSelector(selectOrders);
  const mail = useSelector(selectMail);

  const number = useSelector(selectNumber);

  const address = useSelector(selectAddress);

  const lastName = useSelector(selectLastName);

  const postalCode = useSelector(selectPostalCode);

  const city = useSelector(selectCity);

  const year = useSelector(selectYear);

  const cardNumber = useSelector(selectCardNumber);

  const cvv = useSelector(selectCvv);

  const item = useSelector(selectCartItem);
  const handlePhNumber = (e) => {
    dispatch(setNumber(e.target.value));
  };
  const handlePostCode = (e) => {
    console.log(`hii`);
    dispatch(setPostalCode(e.target.value));
  };
  const handleCardNum = (e) => {
    dispatch(setCardNumber(e.target.value));
  };
  const handleCvv = (e) => {
    dispatch(setCvv(e.target.value));
  };
  const handleYear = (e) => {
    dispatch(setYear(e.target.value));
  };
  const submitHandler = (e) => {
    console.log('hii');
    e.preventDefault();

    if (
      name &&
      lastName &&
      mail &&
      number &&
      address &&
      city &&
      postalCode &&
      cardNumber &&
      year &&
      cvv
    ) {
      if (number.length < 10) {
        toast.error('Number must be 10');
      } else if (postalCode.length < 6) {
        toast.error('must be 6');
      } else if (cardNumber.length < 16) {
        toast.error('card number only 16 digits');
      } else if (cvv.length < 3) {
        toast.error('CVV must be 3');
      } else if (year.length < 4) {
        toast.error('must be 4 digits');
      } else if (year < 2022) {
        toast.error('card is expired');
      } else {
        console.log('hiii');
        dispatch(
          setDetails({
            name,
            lastName,
            mail,
            number,
            address,
            city,
            postalCode,
            cardNumber,
            year,
            cvv,
          })
        );

        dispatch(setOrders([...item]));

        dispatch(setRemoveItemFromCart());

        navigate('/home');
      }
    } else {
      toast.error('all fields are important');
    }
  };

  return (
    <>
      <div className='flex flex-col md:w-full px-10 py-5'>
        <h2 className='mb-4 font-bold md:text-xl text-heading '>
          Shipping Address
        </h2>
        <form
          onSubmit={submitHandler}
          className='justify-center w-full mx-auto'
        >
          <div>
            <div className='space-x-0 lg:flex lg:space-x-4'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='firstName'
                  className='block mb-3 text-sm font-semibold text-gray-500'
                >
                  First Name
                </label>
                <input
                  id='firstName'
                  type='text'
                  value={name}
                  onChange={(e) => dispatch(setUserName(e.target.value))}
                  placeholder='First Name'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='w-full lg:w-1/2 '>
                <label
                  htmlFor='lastName'
                  className='block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0'
                >
                  Last Name
                </label>
                <input
                  id='lastName'
                  type='text'
                  value={lastName}
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  placeholder='Last Name'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
            </div>
            <div className='mt-4 space-x-0 lg:flex lg:space-x-4'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='Email'
                  className='block mb-3 text-sm font-semibold text-gray-500'
                >
                  Email
                </label>
                <input
                  id='Email'
                  type='text'
                  value={mail}
                  onChange={(e) => dispatch(setMail(e.target.value))}
                  placeholder='Email'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='w-full lg:w-1/2 '>
                <label
                  htmlFor='number'
                  className='block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0'
                >
                  Mobile Number
                </label>
                <input
                  id='number'
                  type='number'
                  value={number}
                  onChange={(e) => handlePhNumber(e)}
                  placeholder='Last Name'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
            </div>
            <div className='mt-4'>
              <div className='w-full'>
                <label
                  htmlFor='Address'
                  className='block mb-3 text-sm font-semibold text-gray-500'
                >
                  Address
                </label>
                <textarea
                  id='Address'
                  className='w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                  name='Address'
                  value={address}
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                  cols='20'
                  rows='3'
                  placeholder='Address'
                ></textarea>
              </div>
            </div>
            <div className='space-x-0 lg:flex lg:space-x-4'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='city'
                  className='block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500'
                >
                  City
                </label>
                <input
                  id='city'
                  type='text'
                  value={city}
                  onChange={(e) => dispatch(setCity(e.target.value))}
                  placeholder='City'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='w-full lg:w-1/2 '>
                <label
                  htmlFor='postcode'
                  className='block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500'
                >
                  Postcode
                </label>
                <input
                  id='postcode'
                  type='number'
                  minLength={6}
                  maxLength={6}
                  value={postalCode}
                  onChange={(e) => handlePostCode(e)}
                  placeholder='Post Code'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
            </div>

            {/* card details */}
            <h2 className='my-4 font-bold md:text-xl text-heading '>
              Card Details
            </h2>

            <div className='space-x-0 lg:flex lg:space-x-4'>
              <div className='w-full lg:w-1/2'>
                <label
                  htmlFor='card-num'
                  className='block mb-3 text-sm font-semibold text-gray-500'
                >
                  Card Number
                </label>
                <input
                  id='card-num'
                  type='number'
                  minLength={16}
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => handleCardNum(e)}
                  placeholder='Card Number'
                  className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>
              <div className='w-full flex gap-1 md:gap-3 mt-4 md:mt-0 lg:w-1/2 '>
                <div className='w-full'>
                  <label
                    htmlFor='year'
                    className='block mb-3 text-sm font-semibold text-gray-500'
                  >
                    Expiry Year
                  </label>
                  <input
                    id='year'
                    type='number'
                    minLength={4}
                    maxLength={4}
                    value={year}
                    onChange={(e) => handleYear(e)}
                    autoComplete='off'
                    placeholder='Expiry Year'
                    className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='cvv'
                    className='block mb-3 text-sm font-semibold text-gray-500'
                  >
                    CVV
                  </label>
                  <input
                    id='cvv'
                    type='number'
                    minLength={3}
                    maxLength={3}
                    value={cvv}
                    autoComplete='off'
                    onChange={(e) => handleCvv(e)}
                    placeholder='CVV'
                    className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center mt-4'>
              <label
                htmlFor='tick'
                className='flex items-center text-sm group text-heading'
              >
                <input
                  id='tick'
                  type='checkbox'
                  className='w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 cursor-pointer'
                />
                <span className='ml-2'>
                  Save this information for next time
                </span>
              </label>
            </div>
            <div className='mt-4'>
              {/* {isLoading ? (
                <LoadingBtn />
              ) : ( */}
              <button
                type='submit'
                className='m-auto mt-2 lg:w-auto px-6 py-4 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200'
              >
                Proceed To Pay
              </button>
              {/* )} */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;

// import React from 'react';

// const Address = () => {
//   return <div>Address</div>;
// };

// export default Address;
