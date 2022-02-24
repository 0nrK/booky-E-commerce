import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
import authService from "../services/authService"

const user = JSON.parse(localStorage.getItem("user"))

export const register = createAsyncThunk("auth/register",
    async ({ username, password }) => {
        try {
            const res = await authService.register(username, password)
            return res.data
        } catch (err) {
            console.log(err);
        }
    }
)

export const login = createAsyncThunk("auth/login",
    async ({ username, password }) => {
        try {
            const data = await authService.login(username, password)
            return { user: data }
        } catch (err) {
            console.log(err);
        }
    }
)

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout()
})


const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = user
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null
        }

    }
})


export default authSlice.reducer
