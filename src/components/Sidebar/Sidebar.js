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
                    <form className="sidebarCategoryList">
                        <div className="sidebarCategoryListItem">
                            <label>Arts & Photography</label>
                            <input type="checkbox"></input>
                        </div>
                        <div className="sidebarCategoryListItem">
                            <label>Engineering & Transportation</label>
                            <input type="checkbox"></input>
                        </div>
                        <div className="sidebarCategoryListItem">
                            <label> DENEME </label>
                            <input type="checkbox"></input>
                        </div>
                        <div className="sidebarCategoryListItem">

                            <label>DENEME</label>
                            <input type="checkbox"></input>
                        </div>

                    </form>
                }
            </div>
        </div>
    </aside>;
};

export default Sidebar;
