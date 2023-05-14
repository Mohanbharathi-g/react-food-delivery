import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';

import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase';
import Banner from '../components/Banner';

import Cart from '../components/Cart';

import Category from '../components/Category';

import Header from '../components/Header';

import Item from '../components/Item';

import Title from '../components/Title';

import { MenuItems, Items } from '../data';
import {
  setUser,
  setDocId,
  setImageAsset,
  setNumber,
  setAddress,
  selectUser,
  setUserName,
  setMail,
  setUserId,
} from '../app/CartSlice';

const Home = () => {
  const [id, setId] = useState('');
  const [items, setItem] = useState(Items);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      // console.log('hiii fetch');
      // console.log(user);

      const q = query(
        collection(db, 'user'),
        where('userUid', '==', user?.uid)
      );

      // console.log(user?.uid);

      // console.log(userId);

      console.log(q);
      const querySnapshot = await getDocs(q);

      // console.log(querySnapshot);

      querySnapshot.docs.map((doc) => {
        dispatch(setDocId(doc.id));
        // console.log(doc.id);
        const userData = doc.data();
        // console.log(userData);
        if (userData) {
          dispatch(setUserId(userData.userUid));
          dispatch(setUserName(userData.user));
          dispatch(setImageAsset(userData.image));
          dispatch(setMail(userData.email));
          dispatch(setNumber(userData.number));
          dispatch(setAddress(userData.address));
        }
        return doc.id;
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setId(user.uid);
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.uid]);

  // filter a products by clicking a category
  const filterItems = (itemId) => {
    const newItem = Items.filter((item) => {
      return item.itemId === itemId;
    });
    setItem(newItem);
  };

  // filter a project by searching of input
  const filterNames = (name) => {
    const newItem = Items.filter((item) => {
      return item.name === name;
    });
    setItem(newItem);
  };

  const backToHome = () => {
    navigate('/');
  };

  // if users uid is not exist this page will show
  // this is contional rendering
  if (!id) {
    return (
      <div className='flex flex-col items-center gap-3 justify-center absolute top-1/2 left-1/4 '>
        <h1 className='text-2xl font-bold text-blue-500'>User not signed</h1>
        <button
          onClick={backToHome}
          className='text-lg font-semibold text-blue-500'
        >
          sign up
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className='w-full h-full'>
          {/* header section */}
          <Header filterNames={filterNames} />

          {/* banner-section */}
          <main className='container'>
            <Cart />
            <Banner />
            <Title title={'Menu category'} />

            <div
              className=' grid gap-2 grid-rows-1  lg: py-5 grid-cols-6  

             xl:grid-cols-6  
             
          sm:grid-cols-3 '
            >
              {MenuItems.map((item, index) => {
                // console.log(filterItems);
                return (
                  <Category key={index} item={item} filterItems={filterItems} />
                );
              })}
            </div>
            <div
              div
              className='grid  gap-2 grid-cols-3 sm:grid-cols-1 lg:grid-cols-3
            xl:grid-cols-4'
            >
              {items.map((item, index) => {
                return <Item key={index} {...item} />;
              })}
            </div>
          </main>
        </div>
      </>
    );
  }
};

export default Home;
