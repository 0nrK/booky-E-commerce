import React from 'react';
import "./SearchSort.scss"

const SearchSort = () => {
    return <section className="">
        <div className="searchSortWrapper">
            <input className="searchInput" type="text" placeholder="Search"></input>

            <select>
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
            </select>
        </div>
    </section>;
};

export default SearchSort;
