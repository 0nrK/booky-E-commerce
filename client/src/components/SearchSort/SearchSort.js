import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItem } from '../../redux/itemSlice';
import "./SearchSort.scss"

const SearchSort = () => {

    const [searchQuery, setSearchQuery] = useState()

    const dispatch = useDispatch()

    function handleSearch(e) {
        e.preventDefault()
        setSearchQuery(() => e.target.value)
        console.log(searchQuery)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchItem(searchQuery))
    }

    return <section className="searchSortContainer">
        <div className="searchSortWrapper">
            <form className="searchForm">
                <input onChange={handleSearch} value={searchQuery || " "} className="searchInput" type="text" placeholder="Search"></input>
                <button onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>

            <select className="sortBy">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
            </select>
        </div>
    </section>;
};

export default SearchSort;
