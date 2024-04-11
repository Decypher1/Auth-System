const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//auth schema

const authSchema = new Schema({
    firstName : {
        type : String,
        required: true
    },

    lastName: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        min: [11, 'Must be 11 digits']
    },

    createAt: {
        type: Date,
        default: Date.now
    },

    updateAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('user', authSchema);//collection name is user in the db