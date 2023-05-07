const express=require('express')
const router=express.Router()
const User=require('../model/user')
const addNewUser = require('../controller/user')

//if you want user details based on it's id use path params
//if you want sort, filter fields or search users use query
//if you want to send new user details, use body 

router.post('/register', addNewUser)
router.get('/users/:id', )
router.put('/change-password/:id', )
router.delete('/users/:id', )

module.exports = router;


