import React, { useState } from 'react';
import ItemComments from '../components/ItemComments/ItemComments';
import ItemInfo from '../components/ItemInfo';
import ItemSlide from '../components/ItemSlide/ItemSlide';
import Navbar from '../components/Navbar/Navbar';
import { useSelector } from "react-redux"

const ItemPage = () => {
    const [book, setBook] = useState()
    const items = useSelector(state => state.items)

/*     items.filter(item => item._id === )
 */    return <div>
        <ItemInfo props={items} />
        <ItemSlide />
        <ItemComments />
    </div>;
};

export default ItemPage;
