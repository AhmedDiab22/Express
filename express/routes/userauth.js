const express = require('express'),
    User = require('../models/users'),
    router = express.Router(),
    auth = require('../middleware/auth')

//Register for New User
router.post('/register' , (req , res)=>{
    if(!req.body.firstName){
        return res.status(200).json({success : false , msg : 'First Name not provided'});
    }else{
        if(!req.body.lastName){
            return res.status(200).json({success : false , msg : 'Last Name not provided'});
        }else{
            if(!req.body.email){
                return res.status(200).json({success : false , msg : 'Email not provided'});
            }else{
                if(!req.body.password){
                    return res.status(200).json({success : false , msg : 'Password not provided'});
                }else{
                    if(!req.body.country){
                        return res.status(200).json({success : false , msg : 'country not provided'});
                    }
                    // else{
                    //     if(!req.body.role){
                    //         return res.status(200).json({success : false , msg : 'Admin Or User not provided'});
                    //     }
                        else{
                        const user = new User({
                            email : req.body.email.toLowerCase(),
                            firstName : req.body.firstName.toLowerCase(),
                            lastName : req.body.lastName.toLowerCase(),
                            password : req.body.password,
                            country : req.body.country,
                            role : req.body.role,
                            mobile : req.body.mobile
                        });
                        user.save((err)=>{
                            if(err){
                                if(err.code === 11000){
                                    return res.status(200).send('Email has been already exists..');
                                }else{
                                    if(err.errors){
                                        if(err.errors.email){
                                            return res.status(200).json({success : false , msg : err.errors.email.message});
                                        }else{
                                            if(err.errors.firstName){
                                                return res.status(200).json({success : false , msg : err.errors.firstName.message});
                                            }else{
                                                if(err.errors.lastName){
                                                    return res.status(200).json({success : false , msg : err.errors.lastName.message});
                                                }else{
                                                    if(err.errors.mobile){
                                                        return res.status(200).json({success : false , msg : err.errors.mobile.message});
                                                    }else{
                                                        if(err.errors.password){
                                                            return res.status(200).json({success : false , msg : err.errors.password.message});
                                                        }else{
                                                            if(err.errors.country){
                                                                return res.status(200).json({success : false , msg : err.errors.country.message});
                                                            }else{
                                                                if(err.errors.role){
                                                                    return res.status(200).json({success : false , msg : err.errors.role.message});
                                                                }else{
                                                            return res.status(200).json({success : false , msg : err});
                                                        }
                                                    }
                                                }}}
                                            }
                                        }
                                    }else{
                                        return res.status(200).json({success : false , msg : 'could not save the user' , err})
                                    }
                                }
                            }else{
                                const token = user.generateToken();
                                return res.status(200).json({
                                    success : true ,
                                    token : token, 
                                    user : user
                                })
                            }
                        })
                    }
                    }
                }
            }
        // }
    }
});

// Login as a user 
router.post('/login' , (req , res)=>{
    User.findOne({email : req.body.email} , (err , user)=>{
        if(err){
            res.status(200).json({success : false , msg : err})
        }else{
            if(!user){
                res.status(400).json({success : false , msg : 'Email not found'});
            }else{
                const validPassword = user.comparePassword(req.body.password);
                if(!validPassword){
                    res.status(400).json({success : false , msg : 'Password Invalid'});
                }else{
                    const token =  user.generateToken();
                            res.status(200).json(
                                {
                                    success : true ,
                                    msg : 'welcome ' + user.firstName + user.lastName , token : token , user : user
                                });
                }
            }
        }
    })
});

// get all users
router.get('/all/users' , (req , res)=>{
    User.find({} , (err , user)=>{
        if(err){
            res.status(200).json({success : false , msg : err})
        }else{
            if(!user){
                res.status(200).json({success : false , msg : 'Sorry there is not users'})
            }else{
                res.status(200).json({success : true , msg : user})
            }
        }
    }).select('email firstName lastName')
})

// get single user
router.get('/profile' ,auth ,(req , res)=>{
    User.findOne({_id : req.decoded.userId}).select('firstName lastName email country').exec((err , user)=>{
        if(err){
            return res.status(404).send(err)
        }else{
            if(!user){
                return res.status(404).send('User not found')
            }else{
                return res.status(200).send( { user : user })
            }
        }
    })
})

//Delete User
router.delete('/delete/user/:id' , (req , res)=>{
    User.findByIdAndDelete({_id : req.params.id} , (err , user)=>{
        if(err){
            return res.status(404).send(err)
        }else{
            return res.status(404).send({message : true , user : 'deleted successfully'})
        }
    })
})

//Update User
router.put('/update/user' ,auth ,(req , res)=>{
    User.findById(req.decoded.userId , (error , user)=>{
        if (error) {
            res.json({success : false , message : error})
        }else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.password = req.body.password;
            country = req.body.country
            // user.mobile = req.body.mobile;
            // user.role = req.body.role;
            user.save((err , data)=>{
                if (err){
                    res.json({success : false , message : err})
                }else{
                    res.json({success : true , message : 'User Updated Successffuly' , data})
                }
            })
        }
    })
})

module.exports = router;