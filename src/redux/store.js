import { configureStore } from "@reduxjs/toolkit"
import itemReducer from "./itemSlice"
import { itemApi } from "./itemApi"
import cartReducer from "./cartSlice";


const store = configureStore({
    reducer: {
        item: itemReducer,
        cart: cartReducer,
        [itemApi.reducerPath]: itemApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemApi.middleware)


})

export default store;