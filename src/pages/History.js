import React from 'react';

import Order from '../components/Order';
import Delivery from '../components/Delivery';

import { selectOrders } from '../app/CartSlice';
import { useSelector } from 'react-redux';

const History = () => {
  const order = useSelector(selectOrders);
  // const totalAmount = useSelector(selectCartShipTotal);

  // const total = useSelector(selectTotalAmount);
  // console.log(order, totalAmount, total);
  return (
    <>
      <Order cartItem={order} />
      <Delivery />
    </>
  );
};

export default History;
