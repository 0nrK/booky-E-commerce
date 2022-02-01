import React from 'react';
import "./SearchSort.scss"

const SearchSort = () => {
    return <section className="">
        <div className="searchSortWrapper">
            <form>
                <input className="searchInput" type="text" placeholder="Search"></input>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>

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
