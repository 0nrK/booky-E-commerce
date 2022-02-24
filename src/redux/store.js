import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./itemSlice"
import { itemApi } from "./itemApi"
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";



const store = configureStore({
    reducer: {
        item: itemReducer,
        cart: cartReducer,
        auth: authReducer,
        [itemApi.reducerPath]: itemApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware)


})

export default store;