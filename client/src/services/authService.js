import axios from "axios"

const API_URL = "http://localhost:5000/auth/"


export const register = async (data) => {
    return axios.post(API_URL + "register", data)
}
export const login = (username, password) => {
    return axios.post(API_URL + "login", { username, password })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringfy(res.data))
            }
            return res.data
        })
}

export const logout = () => {
    localStorage.removeItem("user")
}

const authService = { register, login, logout }

export default authService