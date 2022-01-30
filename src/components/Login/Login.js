import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss"
const Login = () => {
    return <div className="loginContainer">
        <h1>Booky</h1>
        <div className="loginLinks">
            <span id="login">Login</span>
            <Link to="/register">
                <p id="register">Register</p>
            </Link>
        </div>
        <form className="loginForm">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </div>;;
};

export default Login;
