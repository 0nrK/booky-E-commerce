import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload)
            toast.success("Product added to cart", {
                position: "bottom-left",
            })
        },
        removeFromCart(state, action) {
            toast.error("Product removed from cart", {
                position: "bottom-left",
            });
            return state.cartItems.filter((item) => item._id !== action.payload._id)
        },
        clearCart(state, action) {
            state.cartItems = []
            toast.error("Cart cleared", { position: "bottom-left" });
        }
    }
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer;