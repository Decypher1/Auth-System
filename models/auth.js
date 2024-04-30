const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose') 
//auth schema

const authSchema = new Schema ({
    username: String,
    password: String
})

authSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', authSchema);//collection name is user in the db