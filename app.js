const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv/config");


app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts')

app.use("/posts", postsRoute);
app.get("/", (req, res) => {
    res.send("Hello")
});

mongoose.connect(process.env.DB_connection, () => console.log('connected'));

app.listen(3000);
