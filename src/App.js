import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Item from './components/Item/Item';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/profile'element={<Profile></Profile>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/additems'element={<Products></Products>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
        <Route path='/update/:id' element={
        <RequireAuth>
          <Item></Item>
        </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>
        
      </Routes>

      <Footer className="static top-0"></Footer>

      
    </div>
  );
}

export default App;
