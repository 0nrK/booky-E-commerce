import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const newItem = action.payload
            state.items.push(newItem)

            toast.success("Book added to cart", {
                position: "bottom-left",
            });

            /* if (localStorage.getItem("count")) {
                localStorage["items"] = JSON.stringify(newItems);
                localStorage["count"] = count;
                localStorage["total"] = total;
            } else {
                localStorage.setItem("items", JSON.stringify(newItems));
                localStorage.setItem("total", total);
                localStorage.setItem("count", count);
            } */


        },
        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem._id === action.payload._id) {
                    const filteredItems = state.cartItems.filter(
                        (item) => item._id !== cartItem._id
                    );
                    console.log(filteredItems);

                    state.cartItems = filteredItems;

                    toast.error("Product removed from cart", {
                        position: "bottom-left",
                    });
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", { position: "bottom-left" });
        },
    },
});

export const { addToCart, removeFromCart, getTotals, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;