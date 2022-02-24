import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import authHeader from "../../services/authHeader"
import "./Login.scss"
import { login } from '../../redux/authSlice';
const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
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

        try {
            const user = await axios.post("http://localhost:5000/auth/login", loginData, authHeader)
                .catch((err) => console.log(err))
            console.log(user);
            if (user) {
                localStorage.setItem("token", user.data.token)
                alert("Login successful")
                navigate("/")
            }
        } catch (err) {
            console.log(err);
        }


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
