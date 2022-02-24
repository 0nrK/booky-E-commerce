import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import "./ItemInfo.scss";

const ItemInfo = ({ props }) => {

    const dispatch = useDispatch()

    function handleAddToCart() {
        dispatch(addToCart(props))
    }
    console.log(props);
    return <div className="itemInfoContainer">
        <div className="itemInfoTop">
            <div>
                <img src="https://www.pusluyayincilik.com.tr/u/pusluyayincilik/img/c/s/a/satranc-1564476329.jpg"></img>
            </div>
            <div className="itemInfoRight">
                <h1></h1>
                <span>$17.99</span>
                <p>Sunt quis elit sit anim elit enim ad sint ipsum adipisicing pariatur fugiat laborum culpa. Labore nulla exercitation ad et sit pariatur ipsum ipsum est. Consectetur qui reprehenderit fugiat pariatur nostrud occaecat commodo ea. Veniam commodo enim nulla commodo sunt incididunt ut dolor reprehenderit do. Proident sint fugiat reprehenderit eiusmod incididunt veniam cillum incididunt aliqua. Non nostrud elit aute exercitation.</p>
            </div>
        </div>
        <div>
            <button onClick={handleAddToCart}>
                Add to basket
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
        </div>
    </div>;
};

export default ItemInfo;
