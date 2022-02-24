import React from 'react';
import "./Book.scss"
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice';
import ItemInfo from '../ItemInfo';
import { Link } from 'react-router-dom';

const Book = ({ props }) => {


    const item = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const handleAddToCart = (book) => {
        dispatch(addToCart(book))
    }



    return (
        <>
            <div className="bookWrapper">
                <Link to={"/item/" + props._id}>
                    <div className="bookTop">
                        <img src={props.imgURL} alt="bookPhoto" />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg> */}
                    </div>
                </Link>

                <div className="bookBottom">
                    <p>{props.title}</p>
                    <span>${props.price}</span>
                </div>

                <div onClick={() => handleAddToCart(props)} className="bookBottomFocus">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>

            </div>
        </>

    )
};

export default Book;
