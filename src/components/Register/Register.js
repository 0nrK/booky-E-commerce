import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Register.scss"

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [regFormData, setRegFormData] = useState({
        username: "",
        password: "",
        password2: "",
        id: "",
    })

    function handleChange(event) {
        setRegFormData(values => ({ ...values, [event.target.name]: event.target.value }))

    }

    async function handleRegister(e) {
        e.preventDefault()


        const regData = {
            username: regFormData.username,
            password: regFormData.password,
        }

        try {
            await axios.post("http://localhost:5000/auth/register", regData)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))

        } catch (err) {
            console.log(err);
        }



        navigate("/login")

    }



    return <div className="registerContainer">
        <h1>Booky</h1>
        <div className="registerLinks">
            <Link to="/login">
                <p id="login">Login</p>
            </Link>
            <span id="register">Register</span>
        </div>
        <form onSubmit={handleRegister} className="registerForm">
            <input onChange={handleChange} name="username" value={regFormData.username || ""} type="text" placeholder="Username" />
            <input onChange={handleChange} name="password" value={regFormData.password || ""} type="password" placeholder="Password" />
            <input onChange={handleChange} name="password2" value={regFormData.password2 || ""} type="password" placeholder="Enter password again" />
            <button type="submit">REGISTER</button>
        </form>
    </div>;
};

export default Register;
