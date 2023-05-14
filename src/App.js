import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing pages elements
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import Profile from './pages/Profile';
import AddProfile from './pages/AddProfile';
import AddingDetail from './pages/AddingDetail';
import History from './pages/History';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addprofile' element={<AddProfile />} />
          <Route path='/editprofile/:id' element={<AddProfile />} />
          <Route path='/details' element={<AddingDetail />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
