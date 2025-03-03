const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors()); // use to communicate with frontend
const port = 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/Zidio_Project";



// Database connection
main().then(()=>{
    console.log("Database connected successfully");
}).catch(err=> console.log(err));

async function main(){
    mongoose.connect(MONGO_URL);
}



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});