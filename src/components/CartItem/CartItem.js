import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import "./CartItem.scss"

const CartItem = ({ props }) => {

    console.log(props);
    const dispatch = useDispatch()

    function handleRemoveFromCart(product) {
        dispatch(removeFromCart(product))
    }

    return <section>
        <div className="cartItem">
            <img alt="bookImg" src={props.imgURL}></img>
            <span className="bookName">{props.title}</span>
            <span className="bookCategory">{props.category}</span>
            <span className="bookPrice">{props.price}</span>
            <div className="cartCounter">
                <button>-</button>
                <input type="number" />
                <button>+</button>
            </div>
            <span class="cartTotal">$47.99</span>
            {/* X ICON */}
            <div onClick={handleRemoveFromCart} className="cartCloseBtn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    </section>;
};

export default CartItem;
