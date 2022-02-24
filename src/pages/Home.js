import React from 'react';
import "./Home.scss"
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchSort from '../components/SearchSort/SearchSort';
import Login from '../components/Login/Login';
import BooksContainer from '../components/BooksContainer/BooksContainer';

const Home = () => {
    return <div className="home">
        <Sidebar />
        <SearchSort />
        <BooksContainer />

    </div >;
};

export default Home;
