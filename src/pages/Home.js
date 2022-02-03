import React from 'react';
import "./Home.scss"
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchSort from '../components/SearchSort/SearchSort';
import Login from '../components/Login/Login';
import BooksContainer from '../components/BooksContainer/BooksContainer';

const Home = () => {
    return <div className="home">
        <div className="homeRight">
            <Sidebar />
            <div className="homeContent">
                <SearchSort />
                <BooksContainer />
            </div>
        </div>
    </div>;
};

export default Home;
