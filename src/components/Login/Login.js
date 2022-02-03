import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "./Login.scss"
import { login } from '../../redux/authSlice';
const Login = () => {

    const [formData, setFormData] = useState({
        username: null,
        password: null,
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleChange(e) {
        setFormData(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    async function handleLogin(e) {
        e.preventDefault()


        const loginData = {
            username: formData.username,
            password: formData.password,
        }

        dispatch(login({ loginData }))


        navigate("/")

    }
    return <div className="loginContainer">
        <h1>Booky</h1>
        <div className="loginLinks">
            <span id="login">Login</span>
            <Link to="/register">
                <p id="register">Register</p>
            </Link>
        </div>
        <form onSubmit={handleLogin} className="loginForm">
            <input onChange={handleChange} value={formData.username || ""} name="username" type="text" placeholder="Username" />
            <input onChange={handleChange} value={formData.password || ""} name="password" type="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </div>;;
};

export default Login;
