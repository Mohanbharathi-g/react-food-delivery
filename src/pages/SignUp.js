import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // this function is if user will enter correct mail and password it will goed to home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        navigate('/home');
      })
      .catch((err) => {
        if (err.code === 'auth/weak-password') {
          alert('its is weak password');
        } else if (err.code === 'auth/email-already-in-use') {
          alert('the mail is already in use');
        }
      });
  };
  return (
    <>
      <div className='container mx-auto'>
        <div className='w-full h-screen  bg-slate-900'>
          <div className='fixed w-full px-4 py-16 z-50 '>
            <div className='max-w-[450px] h-[600px] mx-auto bg-transparent text-slate-100  rounded-md bg-slate-900'>
              <div className='max-w-[320px] mx-auto py-16 px-2 md:px-0'>
                <div className='logo-login text-center '>
                  <img
                    src='https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740'
                    alt='logo'
                    className='w-[100px] h-[100px] mx-auto rounded-xl'
                  />
                </div>
                <h1 className='text-3xl font-bold'>Sign Up</h1>

                <form
                  onSubmit={handleSubmit}
                  className='w-full flex flex-col py-4'
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded md:w-[70vw]'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    required
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded md:w-[70vw]'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-orange-500 text-slate-100 py-3 my-6 rounded font-semibold hover: transition-all duration-300
                    md:w-[70vw]'
                  >
                    Sign Up
                  </button>
                  <div className=' flex justify-between items-center font-medium mb-3 text-gray-400'>
                    <p className='mr-2'>
                      {' '}
                      <input type='checkbox' /> Remember me ?
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p>
                    <span className='text-gray-100'>
                      Already have an account ?
                    </span>
                    <NavLink className='text-blue-500' to='/signin'>
                      {' '}
                      Sign In
                    </NavLink>{' '}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
