const Product = require('../models/products'),
    express = require('express'),
    router = express.Router()

// add new Product
router.post('/add/product' , (req , res)=>{
    const product = new Product({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        sex : req.body.sex,
        img : req.body.img,
        sale : req.body.sale
    })
    product.save((err)=>{
        if(err){
            return res.status(200).json({success : false , msg : err});
        }else{
            return res.status(200).json({success : true , msg : 'New Product Added Successfully' , product});
        }
    })
});

// get single product 
router.get('/singleProduct/:id' , (req , res)=>{
    Product.findById(req.params.id , (err , product)=>{
        if(err){
            res.json({success : false , message : err})
        }else{
            res.json({success : true , message : product})
        }
    } )
})

//get all Products of women
router.get('/allProducts' , (req , res)=>{
    Product.find({} , (err , products)=>{
        if(err){
            res.json({success : false , message : err})
        }else{
            res.json({success : true , message : products})
        }
    })
})

// //get all Products of women
// router.get('/allProductsWomen' , (req , res)=>{
//     Product.find({'sex' : 'women'} , (err , products)=>{
//         if(err){
//             res.json({success : false , message : err})
//         }else{
//             res.json({success : true , message : products})
//         }
//     })
// })

// //get all Products of men
// router.get('/allProductsMen' , (req , res)=>{
//     Product.find({'sex' : 'men'} , (err , products)=>{
//         if(err){
//             res.json({success : false , message : err})
//         }else{
//             res.json({success : true , message : products})
//         }
//     }).select({sex : 'men'})
// })

// delete Product 
router.delete('/delete/product/:id' , (req , res)=>{
    Product.findByIdAndDelete(req.params.id , (err , product)=>{
        if(err){
            res.json({success : false , message : err})
        }else{
            res.json({success : true , message : 'Product deleted Successffuly' , product})
        }
    })
})

//Update product
router.put('/update/product/:id' , (req, res) => {
    Product.findById(req.params.id, (error, data) => {
        if (error) {
            res.json({success : false , message : error})
        } else {
            data.name = req.body.name,
            data.price = req.body.price,
            data.description = req.body.description,
            data.sex = req.body.sex,
            data.img = req.body.img,
            data.sale = req.body.sale
            data.save((err , country)=>{
                if(err){
                    res.json({success : false , message : err})
                }else{
                    res.json({success : true , message : 'Product Updated Successffuly' , country})
                }
            })
        }
    })
})



module.exports = router;