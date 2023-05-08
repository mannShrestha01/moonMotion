const express = require('express')
const app = express()
//const port = 8080
require('dotenv').config()

//we need to parse the body sent in order to read

//we can instll body-parser but new express version has it in built


const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())

const userRoute=require('./routes/user')
const User = require('./model/user')
const dbConnect = require('./db/dbConnect')
dbConnect()

app.use(express.json());
app.use("/",userRoute)

const users = [

    {name: 'ram', age:30},
    {name: 'shyam', age:20},
    {name: 'hari', age:50},
    {name: 'homenath', age:22}

]


//http://localhost:8080/register?name=mann&password=@mann123

app.listen(process.env.PORT, () => {

      console.log(`Example app listening on port ${process.env.PORT}`)
    
    });