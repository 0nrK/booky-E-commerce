import React from 'react';
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

const App = () => {
  return <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addbook" element={<AddBookPage />} />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
