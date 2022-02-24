import axios from "axios"
import authHeader from "./authHeader"

const API_URL = "http://localhost:5000/auth/"

class userService {
    getUser() {
        return axios.get(API_URL + id, { headers: authHeader() })
    }
}