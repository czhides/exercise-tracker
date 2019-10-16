const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; //port of the server

app.use(cors()); //middleware
app.use(express.json()); //parse JSON

//connection to db
const uri = process.env.ATLAS_URI; //in .env file (using dotenv)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.listen(port, () => {
  //this starts the server
  console.log(`Server is running on port: ${port}`);
});

//https://www.youtube.com/watch?v=7CqJlxBYj-M
