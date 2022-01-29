const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userTable = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength:3,
    }
},{
        timestamps: true,
})

const users = mongoose.model('usermodel',userTable)

module.exports = users