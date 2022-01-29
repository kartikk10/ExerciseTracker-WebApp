const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")

require('dotenv').config()                                              //bring to process.env from envir 
const uri = process.env.ATLAS_URI
app.use(express.urlencoded({ extended:false})); 

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB Atlas DataBase Connected")
})

app.use(cors());                                                            //Middleware
app.use(express.json());                                                    //Exchange Json Data

const port = process.env.PORT || 3000;

const exercisesRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

app.use('/exercises',exercisesRouter);
app.use('/users',userRouter);


app.listen(port,()=>{
    console.log("Server listening on Port",port)
})