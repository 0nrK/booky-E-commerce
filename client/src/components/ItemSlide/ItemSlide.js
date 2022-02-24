import React, { useState } from 'react';
import "./ItemSlide.scss"
import { useSelector, useDispatch } from "react-redux"
import Book from '../Book/Book';




const ItemSlide = () => {
    const items = useSelector(state => state.item.items)
    console.log(items);
    return <section className="otherBooks">
        {items.slice(0, 3).map((item) => <Book key={item._id} props={item} />)}
    </section>;
};

export default ItemSlide;
