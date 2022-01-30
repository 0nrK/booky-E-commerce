import React, { useState } from 'react';
import "./Sidebar.scss"

const Sidebar = () => {

    const [isCatActive, setIsCatActive] = useState(false)
    const [isPriceActive, setIsPriceActive] = useState(false)



    return <aside>
        <div className="sidebarWrapper">
            <div className="sidebarCategories">
                <div onClick={() => setIsCatActive(!isCatActive)} className="sidebarCategoriesTop">
                    <h3>Categories</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${isCatActive && 'active'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isCatActive &&
                    <div className="sidebarCategoryList">
                        <p>Arts & Photography</p>
                        <p>Engineering & Transportation</p>
                        <p>Business & Money</p>
                        <p>Computers & Technology</p>
                        <p>Cookbooks, Food & Wine</p>
                        <p>Education & Teaching</p>
                        <p>Crafts, Hobbies & Home</p>
                        <p>Comics & Graphic Novels</p>
                        <p>Health, Fitness & Dieting</p>
                        <p>History</p>
                        <p>Humor & Entertainment</p>
                        <p>Science & Math</p>
                        <p>Mystery, Thriller & Suspense</p>
                        <p>Literature & Fiction</p>
                        <p>Science Fiction & Fantasy</p>
                        <p>Teen & Young Adult</p>
                        <p>Sports & Outdoors</p>
                        <p>Test Preparation</p>
                        <p>Travel</p>
                    </div>
                }
            </div>
        </div>
    </aside>;
};

export default Sidebar;
