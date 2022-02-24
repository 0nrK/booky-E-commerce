import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems: [],
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            state.cartItems.push(action.payload)
            state.total += 1
            console.log(state);
            toast.success("Product added to cart", {
                position: "bottom-left",
            })
        },
        removeFromCart(state, action) {
            toast.error("Product removed from cart", {
                position: "bottom-left",
            });
            console.log(action.payload._id);
            return state.cartItems.filter((item) => item._id !== action.payload._id)
        },
        clearCart(state, action) {
            state.cartItems = []
            toast.error("Cart cleared", { position: "bottom-left" });
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;