import React from 'react';

import { selectDetails, selectImageAsset } from '../app/CartSlice';
import { useSelector } from 'react-redux';
import { FcPhoneAndroid } from 'react-icons/fc';
import {
  MdLocalPostOffice,
  MdLocationCity,
  MdMarkEmailRead,
} from 'react-icons/md';

const Delivery = () => {
  // const dispatch=useDispatch()
  const userDetail = useSelector(selectDetails);

  const img = useSelector(selectImageAsset);
  console.log(userDetail);

  return (
    <>
      <div className='bg-slate-300 px-10 py-7 text-grey-900 w-full h-full'>
        <div className=''>
          <h1 className='text-3xl font-semibold'>Delivery address</h1>
        </div>
        <div className='flex flex-col items-center gap-2 xsm:xl md:text-md font-semibold'>
          <div>
            <img
              src={img}
              alt={userDetail.cvv}
              className='w-[100px] h-[100px] rounded-full'
            />
          </div>
          <div className='flex justify-between gap-5'>
            <p className='capitalize'>Mr.{userDetail.name}</p>
            <p className='flex items-center'>
              <FcPhoneAndroid /> <span>{userDetail.number}</span>
            </p>
          </div>
          <div className='flex gap-5'>
            <p className='flex items-center'>
              <MdLocationCity /> <span>{userDetail.address}</span>
            </p>
            <p className='flex items-center'>
              <MdLocalPostOffice />
              {userDetail.postalCode}
            </p>
          </div>
          <div>
            <p className='flex items-center'>
              <MdMarkEmailRead />
              {userDetail.mail}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
