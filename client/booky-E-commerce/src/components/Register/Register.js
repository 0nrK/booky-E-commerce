import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.scss"

const Register = () => {
    return <div className="registerContainer">
        <h1>Booky</h1>
        <div className="registerLinks">
            <Link to="/login">
                <p id="login">Login</p>
            </Link>
            <span id="register">Register</span>
        </div>
        <form className="registerForm">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Enter password again" />
            <button type="submit">REGISTER</button>
        </form>
    </div>;
};

export default Register;
