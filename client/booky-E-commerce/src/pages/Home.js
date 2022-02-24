import React from 'react';
import "./Home.scss"
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import SearchSort from '../components/SearchSort/SearchSort';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';

const Home = () => {
    return <div className="home">
        <Navbar />
        <div className="homeRight">
            <Sidebar />
            <div className="homeContent">
                <SearchSort />
            </div>
        </div>
    </div>;
};

export default Home;
