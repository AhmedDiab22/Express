const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String ,
        require : true , 
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    lastName : {
        type : String , 
        require : true , 
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    email : {
        type : String,
        require : true,
        trim: true,
        unique : true,
        minlength : 3,
        maxlength : 255,
        validate : {
            validator : email => validator.isEmail(email),
            message : 'please Enter a valid emial like as user@example.com'
        }
    },
    password : {
        type : String,
        require : true,
        trim : true,
        minlength : 5,
        maxlength : 1024
    },
    country : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        minlength : 5,
        maxlength : 20 ,
        Validator : {
            validator : mobile => validator.isMobilePhone(mobile),
            message : 'please Enter a valid Phone'
        }
    },
    role : {
        type : String,
        enum : ['admin' , 'user'],
        default : 'user'
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});


userSchema.methods.generateToken = function () {
    const token = jwt.sign({userId : this._id , email : this.email , name : this.firstName + ' ' +this.lastName  , role : this.role} , config.secret , { expiresIn : '24h' });
    return token
}

userSchema.pre('save' , function(next){
    if(!this.isModified('password'))
    return next

    bcrypt.hash(this.password , null , null , (err , hash)=>{
        if (err) return next(err);
        this.password = hash;
        next()
    })
})
userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password , this.password);
}

module.exports =  mongoose.model('express-User' , userSchema)