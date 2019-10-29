const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    category : {
      enum : [ '' , '' ,  ]
    }
});
module.exports = mongoose.model('product' , productSchema);













//name : { type : String , require : true },
    // price : { type : Number , require : true },
    // description : { type : String , require : true },
    // sex : { type : String , enum : [ 'all' , 'women' , "men" ] , default : 'all'},
    // Classified : { type : String , enum : ['nbaCollection' , 'sweeters' , 'labelsWeLove' , 'womenMustHave', 'menMustHave'  , 'wearNow' , 'recommend']},
    // categoryWomen : { type : String , cat :
    // ["jeans" ,  "realher"  , "sauce beauty" , "brittany paige" , "memoi" , "Bra in a Box" ,
    // "Harper" , "pure Aura" , "sterling" , "emory" , "more labs" , "original makeup" , "casery" ,
    //   "breda" , "superga" , "machete"]},
    // categoryMen : { type : String , cat : 
    // [ "jeans" ,"honor essential"  , "Xray" , "Hyprid green label" , "craighill" , "Vintage Foundry Co." ,
    // "Blind Barber" , "breda" , "Reserved Footwear" , "FLPSDE" , "Timex" , "G-Shock" , "Timbuk2"]},
    // img : { type : String , require : true },
    // sale : { type : Number  , default : 0}