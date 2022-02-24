import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../Book/Book';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./BooksContainer.scss"
const BooksContainer = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
        console.log(data);
    }, [])

    return <div className="booksContainer">
        {data.map(book => {
            return (
                <Book key={book._id} props={book} />
            )
        })}
    </div >;
};

export default BooksContainer;