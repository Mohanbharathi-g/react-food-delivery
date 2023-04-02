import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing pages elements
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Store from './app/Store';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='home' element={<Home />} />
          {console.log(Store)}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
