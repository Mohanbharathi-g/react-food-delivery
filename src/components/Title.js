import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='pt-3'>
      <h1 className='text-orange-500 font-bold text-xl'>{title}</h1>
    </div>
  );
};

export default Title;
