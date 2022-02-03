import axios from "axios"

const API_URL = "http://localhost:5000/auth/"


const register = (username, password) => {
    return axios.post(API_URL + "register", { username, password })
}
const login = (username, password) => {
    return axios.post(API_URL + "login", { username, password })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringfy(res.data))
            }
            return res.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = { register, login, logout }

export default authService