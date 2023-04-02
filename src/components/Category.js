import React from 'react';

const Category = ({ item: { id, itemId, imgSrc, name }, filterItems }) => {
  // console.log(`item ${item}`);
  // console.log(filterItems);

  // const { id, itemId, imgSrc, name } = item;
  return (
    <>
      <div
        onClick={() => filterItems(itemId)}
        key={id}
        className='grid p-5 bg-orange-200  items-center justify-center
        rounded-lg
        
        
        sm:rounded-1/2
        lg:rounded-lg cursor-pointer'
        // onClick={() => filterItems(itemId)}
      >
        <div className='grid  items-center justify-center '>
          <img src={imgSrc} className='w-25' alt={itemId} />
        </div>
        <div className='grid items-center font-semibold text-orange-500'>
          <button type='button'>{name}</button>
        </div>
      </div>
    </>
  );
};

export default Category;
