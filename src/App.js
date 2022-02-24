import React, { useState, useEffect } from 'react';
import "./App.scss"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddBookPage from "./pages/AddBookPage"
import Cart from './pages/Cart';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ItemPage from './pages/ItemPage';
import { fetchItem } from './redux/itemSlice';
import { useSelector, useDispatch } from "react-redux"
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import User from './pages/User';
const App = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchItem())
  }, [])

  console.log(items);

  return (
    <>
      {
        items ?
          <div className="container">
            <BrowserRouter>
              <Navbar />
              <ToastContainer />
              <div className="containerBottom">
                <Routes>
                  <Route path="/admin" element={<Admin />} />
                  <Route exact path="/" element={<Home />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/item/:id" element={<ItemPage />} />
                  <Route path="/addbook" element={<AddBookPage />} />
                </Routes>
              </div>
            </BrowserRouter>
          </div >
          :
          <h1>Loading...</h1>
      }
    </>

  )
};

export default App;
