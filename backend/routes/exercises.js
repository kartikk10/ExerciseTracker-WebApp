//import router
const router = require('express').Router()
const execmodel = require('../models/exercise.model')

//print all exercises
router.get("/",(req,res)=>{
    execmodel.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error ' + err))
})

//ans user, after hitting 'URL/add', all params are in request   // new Excercise({params:value});
router.post('/add',(req,res)=>{
    const Exname = req.body.name;
    const desc = req.body.description;
    const duration = Number(req.body.duration);
    //const date =  Date.parse(req.body.date);

    console.log(Exname)
    const newExercise = new execmodel({Exname,desc,duration});

    newExercise.save()
    .then(()=> res.json('User Added'))
    .catch(err => res.status(400).json('Error ' + err))
})


//export router
module.exports = router