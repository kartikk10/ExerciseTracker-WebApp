const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exerciseTable = new Schema({
    Exname:{type:String,required:true},
    desc: {type:String,required:true},
    duration: {type:Number,required:false},
    //date: {type:Date,required:false},
},{timestamps:true})

const exec = mongoose.model('execmodel',exerciseTable)

module.exports = exec