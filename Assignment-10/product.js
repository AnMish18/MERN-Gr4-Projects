const express = require('express');
const fs= require('fs');
const {Product} = require('./Models/Product');
const router = express.Router();


router.get('/',async(req,res)=>{     //asyncrhonous function returns promise which returns await
    try{ 
        const products =await Product.find();
        return res.status(200).json({
            message:"Products are fetched successfully",
            products
        })
           
     }
     catch(err){
         return res.status(500).json({
             message:message,
             error : err.message
         })
     }
 })



 router.post("/add",async(req,res)=>{
     try{
         let error ='';
         const { product_id,product_name,product_price,product_description,product_image}= req.body;
         if(product_name=='' || product_id=='' || product_price==''){
             error = 'Missing Product name or id or price';
             res.status(400).json({
                 message:error
             })
         }
         const ProductObj={
             product_id:product_id,
             product_name:product_name,
             product_price:product_price,
             product_description:product_description,
             product_image:product_image             
         }

         const product=new Product(ProductObj);
          await product.save();
          res.status(200).json({
              message:"Suceesfull product addition",
              product
          })
          
     }catch(err){
        return res.status(500).json({
             message: "Something went wrong",
             error : err.message
         })
     }
 })


  router.put("/update/:id",async (req,res)=>{
    try{  
       const id=req.params.id;  
    //    const {product_id,product_name,product_price,product_description,product_image}=req.body;
    //    await Product.findByIdAndUpdate(id,{product_id,product_name,product_price,product_description,product_image});
       if(!id){
           return res.status(404).json({
               message:"No id available for the requested id number"
           })
       }
       const {product_id,product_name,product_price,product_description,product_image}=req.body;
       if(product_name=='' || product_id=='' || product_price==''){
        error = 'Missing Product name or id or price';
        res.status(400).json({
            message:error
        })
    }
        await Product.findByIdAndUpdate(id,{product_id,product_name,product_price,product_description,product_image});
       return res.status(200).json({
           message:"Update successful for thr requested id"
        })
    

    }
    catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message
         })
        }
    })

  router.delete("/delete/:id",async(req,res)=>{
      const id=req.params.id;
      try{
        if(!id){
            return res.status(404).json({
                message:"Deletion cannot be done on non existent id"
            })
        }
        const response= await Product.findByIdAndDelete(req.params.id);
        if(!response){
            return res.status(404).json({
                message:"no data found"
            })
        }
        else{
            return res.status(200).json({
                message:"the product with the given id is deleted"
        })
    }

      }
      catch(err){
        res.status(500).json({
            message:"Data is not deleted",
            error:err.message
        })
      }
    })
    //   router.delete('/delete/:product_name', async(req,res)=>{
    //     try{
    //         const {product_name}= req.body;
    //         const product=await Product.findOneAndDelete({product_name:req.body});
    //         if(product_name != req.body.product_name){
    //             return res.status(404).json({
    //                 message:"No matching product"
    //             })
    //         }
    //         else{
    //         return res.status(200).json({
    //             message:"Data deleted successful",
    //         })
    //     }
    //     }
    //     catch(err){
    //       return res.status(500).json({
    //           message:"Data deletion unsuccessful",
    //           error:err.message
    //       })
    //     }
    // }) 


 
 module.exports = router;