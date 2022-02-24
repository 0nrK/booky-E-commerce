import React, { useState } from 'react';
import "./AddNewBook.scss"
import axios from 'axios'

const AddNewBook = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 19.99,
        count: 10,
        category: "",
        imgURL: ""
    })

    function handleChange(event) {
        setFormData(values => ({ ...values, [event.target.name]: event.target.value }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
        axios.post("http://localhost:5000/books/addbook", formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    return <div>
        <h1 className="addNewBookTitle">Add a new book</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Book Title:</label>
            <input onChange={handleChange} value={formData.title || ""} type="text" name="title" />
            <label htmlFor="description">Book Description:</label>
            <input onChange={handleChange} value={formData.description || ""} type="text" name="description" />
            <label htmlFor="price">Price:</label>
            <input onChange={handleChange} value={formData.price || 19.99} type="number" name="price" />
            <label htmlFor="count">Stock:</label>
            <input onChange={handleChange} value={formData.count || 10} type="number" name="count" />
            <label htmlFor="category">Category:</label>
            <input onChange={handleChange} value={formData.category || ""} type="text" name="category" />
            <label htmlFor="imgURL">Img URL:</label>
            <input onChange={handleChange} value={formData.imgURL || ""} type="text" name="imgURL" />
            <button type="submit">SUBMIT</button>
        </form>
    </div>;
};

export default AddNewBook;
