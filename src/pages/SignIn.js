import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === 'auth/user-not-found') {
          alert('user not found');
        } else if (err.code === 'auth/wrong-password') {
          alert('oops wrong password!!! Try again');
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
                <h1 className='text-3xl font-bold text-slate-100'>Sign In</h1>

                <form
                  onSubmit={handleSubmit}
                  className='w-full flex flex-col py-4'
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    required
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 my-2 bg-gray-700 rounded'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    required
                  />
                  <button
                    type='submit'
                    className='bg-orange-600 py-3 my-6 rounded font-semibold hover:bg-slate-100
                    text-slate-900 transition-all duration-300'
                  >
                    Sign In
                  </button>
                  <div className=' flex justify-between items-center font-medium mb-3 text-slate-100'>
                    <p className='mr-2'>
                      {' '}
                      <input type='checkbox' /> Remember me ?
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p>
                    <span className='text-gray-500'>create a account?</span>
                    <NavLink to='/signup'> Sign up</NavLink>{' '}
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

export default SignIn;
