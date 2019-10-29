const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express();
    config = require('./config/database');
    port = process.env.PORT || 5050


 // database connected 
mongoose.connect( config.uri , { useNewUrlParser: true  , useUnifiedTopology: true } , (err)=>{
    if(err){
        console.log('data base err ' + err);
    }else{
        console.log('database connected successfully');
    }
})   


// Setting up port with express js 
const product = require('./routes/product');
const userAuth = require('./routes/userauth');
// const cart = require('./routes/cart.route');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json());
// use cors for orining url
app.use(cors())

// Setting up route with express js
app.use('/user' , userAuth);
app.use('/product' , product);






app.listen(port , ()=>{
    console.log(`Server running on port ${port}`);
})
