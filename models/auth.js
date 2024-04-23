const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose') 
//auth schema

const authSchema = new Schema ({
    username: String,
    password: String
})

authSchema.plugin(passportLocalMongoose);

// const authSchema = new Schema({
//     firstname : {
//         type : String,
//         required: true
//     },

//     lastname: {
//         type: String,
//         require: true,
//     },

//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },

//     password: {
//         type: String,
//         required: true
//     },

//     email: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: Number,
//         required: false,
//         min: [11, 'Must be 11 digits']
//     },

//     createAt: {
//         type: Date,
//         default: Date.now
//     },

//     updateAt: {
//         type: Date,
//         default: Date.now
//     }
// })
module.exports = mongoose.model('users', authSchema);//collection name is user in the db