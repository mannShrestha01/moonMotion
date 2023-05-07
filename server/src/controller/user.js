const addNewUser = async(req, res) => {
    //to save into the database
    //console.log(req.body)
    // res.send('HI')
    //User.create({name: 'ram', age:30})
    User.create(req.body)

}

module.exports = addNewUser;