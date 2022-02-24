const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const Book = require('../models/bookModel.js')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.get('/', async (req, res) => {
    console.log(req.body)
    try {
        const books = await Book.findOne()
        res.status(200).json(books)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/addbook", async (req, res) => {
    console.log(req.body);
    try {
        const newBook = new Book({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            count: req.body.count,
            category: req.body.category,
            imgURL: req.body.imgURL
        })
        await newBook.save()

        res.status(200).json(newBook)

    } catch (err) {
        res.send(err)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json("Book has been deleted")
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;
