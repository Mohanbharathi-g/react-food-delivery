// import React from 'react';

// import Order from '../components/Order';
// import Address from '../components/Address';

// import { selectCartItem } from '../app/CartSlice';
// import { useSelector } from 'react-redux';

// const AddingDetail = () => {
//   const cartItem = useSelector(selectCartItem);
//   console.log(cartItem);
//   return (
//     <div className='bg-red-500'>
//       <Order cartItem={cartItem} />
//       <Address />
//     </div>
//   );
// };

// export default AddingDetail;

import React from 'react';
import Order from '../components/Order';
import Address from '../components/Address';

import { selectCartItem } from '../app/CartSlice';

import { useSelector } from 'react-redux';

const AddingDetail = () => {
  const cartItem = useSelector(selectCartItem);
  return (
    <>
      <Order cartItem={cartItem} />
      <Address />
    </>
  );
};

export default AddingDetail;
