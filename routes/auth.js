const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");
const authJWT = require('../middleware/authJWT');

router.post("/register", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        })


        await newUser.save()
        res.status(200).json("islem basarili")


    } catch (err) {
        res.status(500).json(err)
    }
})



router.post("/login", async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ username: req.body.username })
    if (user) {
        const token = jwt.sign({ username: user.username }, "secret123")
        return res.json({ status: "ok", token })
    } else {
        return res.status(404).json("err")
    }
})

router.get("/:id", async (req, res) => {
    const id = req.body._id
    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router