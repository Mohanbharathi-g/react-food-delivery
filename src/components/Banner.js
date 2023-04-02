import React from 'react';

const Banner = () => {
  return (
    <div className=' flex items-center justify-between   bg-orange-100 rounded-xl mt-[20vh]'>
      <div className='grid items-center px-3 md:p-3'>
        <h3
          className='font-semibold text-orange-500 xl:text-5xl lg:text-4xl md:text-2xl
        '
        >
          Hello Mohanbharathi,
        </h3>
        <p className='font-semibold text-orange-500 sm:text-base'>
          Get free discount for every <span>$ 20</span> purchase
        </p>
        <a
          href='www.foods.com'
          className='bg-orange-500 p-2 mt-5 text-center font-medium rounded-2xl text-slate-100
          md:w-2/3
          sm:w-3/4   '
        >
          Learn More
        </a>
      </div>
      <div>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337'
          alt=''
          className=' z-20'
        />
      </div>
    </div>
  );
};

export default Banner;
