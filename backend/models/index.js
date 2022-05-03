const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
name:{
    type: 'string',
    required: true
},
surname:{
    type: 'string',
    required: true
},
dateOfBirth:{
    type:  'string',
    required: true
},
grade:{
    type: 'number',
    required: true
},
date:{
    type:  Date,
    default: new Date
}


})

module.exports = mongoose.model('user' , userSchema)