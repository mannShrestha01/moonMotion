const express = require('express')

const app = express()

const port = 8000

//we need to parse the body sent in order to read

//we can instll body-parser but new express version has it in built

app.use(express.json());
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())


//schema -> to add a structure
const userSchema = new mongoose.Schema({
    //id: String, // String is shorthand for {type: String}
    name: String,
    password: String,
    email: String,
    role: String
  });

  const User = mongoose.model('User', userSchema);

const dbConnect = async() =>{
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/firstTryMongo');
        //console.log(res);
        if(res){
            console.log("Connected to mongodb")
        }

    }catch(err){
        console.log(err);
    }
}
dbConnect()


const users = [

    {name: 'ram', age:30},
    {name: 'shyam', age:20},
    {name: 'hari', age:50},
    {name: 'homenath', age:22}

]

//if you want user details based on it's id use path params
//if you want sort, filter fields or search users use query
//if you want to send new user details, use body 
app.get('/users/:id', async(req, res) => {
    // console.log(req)
    console.log(req.body)
    console.log(req.params)
    // console.log(req.query.startswith)

    // const data = await User.findById(req.params.id)
    // res.json({data:data })

})

http://localhost:8000/register?name=mann&password=@mann123

app.post('/register', (req, res) => {
    //to save into the database
    //console.log(req.body)
    // res.send('HI')
    //User.create({name: 'ram', age:30})
    User.create(req.body)

})


app.put('/change-password/:id', async(req, res) => {
    //console.log(req.params)
    const data = await User.findByIdAndUpdate(req.params.id, req.body)
    })

app.delete('/users/:id', async(req, res) => {
    //console.log(req.body)
    const data = await User.findByIdAndDelete(req.params.id)
})

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

});