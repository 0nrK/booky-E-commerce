import React from 'react';
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';


const Navbar = () => {
    const items = useSelector((state) => state.items);

    return (
        <nav className="navbarContainer">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <Link to="/">
                        <h1>Booky</h1>
                    </Link>
                </div>
                <div className="navbarRight">
                    <div className="navbarCart">

                        <div className="navbarCartQty">
                            <span>3</span>
                        </div>

                        <Link to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                    </div>
                    <Link to="/register">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            REGISTER / LOGIN
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
