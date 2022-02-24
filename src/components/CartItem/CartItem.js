import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./CartItem.scss"
import { removeFromCart } from "../../redux/cartSlice"

const CartItem = ({ props }) => {

    const [itemCounter, setItemCounter] = useState(1)

    const dispatch = useDispatch()

    function handleDecrease(item) {
        setItemCounter(itemCounter - 1)
        if (itemCounter === 1) {
            console.log("A.")
            dispatch(removeFromCart(item))
        }
    }

    function handleRemoveFromCart(item) {
        dispatch(removeFromCart(item))
    }
    return <section>
        <div className="cartItem">
            <img alt="bookImg" src={props.imgURL}></img>
            <span className="bookName">{props.title}</span>
            <span className="bookCategory">{props.category}</span>
            <span className="bookPrice">{props.price}</span>
            <div className="cartCounter">
                <button onClick={handleDecrease}>-</button>
                <input value={itemCounter} type="number" />
                <button onClick={() => setItemCounter(itemCounter + 1)}>+</button>
            </div>
            <span class="cartTotal">$47.99</span>
            {/* X ICON */}
            <div onClick={() => handleRemoveFromCart(props)} className="cartCloseBtn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    </section>;
};

export default CartItem;
