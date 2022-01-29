//import routes
const router = require('express').Router()
const usermodel = require('../models/user.model')

//display all user
router.get('/',(req,res)=>{
    usermodel.find()
    .then(users=> res.json(users))
    .catch(err => res.status(400).json('Error ' + err))
})
 //Add user after hitting 'URL/add' with post req, username will be in the request body
router.post('/add',(req,res)=>{
    const username= req.body.username;
    const newUser = new usermodel({username})
    
    //console.log(req.body)
    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error '+err))
})

 //export router
 module.exports = router