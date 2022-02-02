import React from 'react';
import ItemComments from '../components/ItemComments/ItemComments';
import ItemInfo from '../components/ItemInfo';
import ItemSlide from '../components/ItemSlide/ItemSlide';
import Navbar from '../components/Navbar/Navbar';


const ItemPage = () => {
    return <div>
        <Navbar />
        <ItemInfo />
        <ItemSlide />
        <ItemComments />
    </div>;
};

export default ItemPage;
