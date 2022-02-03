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
const App = () => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.items)

  useEffect(() => {
    dispatch(fetchItem())
  }, [])


  return (
    <>
      {
        items ? <h1>Loading...</h1> :
          <div className="container">
            <BrowserRouter>
              <Navbar />
              <ToastContainer />
              <div className="containerBottom">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/itempage" element={<ItemPage />} />
                  <Route path="/addbook" element={<AddBookPage />} />
                </Routes>
              </div>
            </BrowserRouter>
          </div>
      }
    </>

  )
};

export default App;
