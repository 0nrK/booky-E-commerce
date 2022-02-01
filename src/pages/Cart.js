import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import Navbar from '../components/Navbar/Navbar';
import "./Cart.scss"
import { useSelector, useDispatch } from "react-redux";


const Cart = () => {

    const items = useSelector((state) => state.cart.items);
    console.log(items)
    return <main className="cart">
        <Navbar />
        <div className="cartWrapper">
            <h1>Cart</h1>
            <div className="cartHead">
                <span className="cartHeadPicture">Picture</span>
                <span className="cartHeadName">Name</span>
                <span className="cartHeadCategory">Category</span>
                <span className="cartHeadPrice">Price</span>
                <span className="cartHeadQuantity">Quantity</span>
                <span className="cartHeadTotal">Total</span>
            </div>
            {items.map((item) => {
                return (
                    <CartItem key={item._id} props={item} />
                )
            })}
            <div>
                <h2>Details</h2>

            </div>
        </div>
    </main>;
};

export default Cart;