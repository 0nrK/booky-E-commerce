const bookRoute = require("./routes/bookRoute.js")
const auth = require("./routes/auth.js")
const dotenv = require("dotenv");
const express = require('express');
const cors = require('cors')

const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
dotenv.config()

app.use("/books", bookRoute);
app.use("/auth", auth);



mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("MongoDb was connected") })
    .catch((err) => { console.log(err); })

app.listen(port, function () {
    console.log('server is running')
})