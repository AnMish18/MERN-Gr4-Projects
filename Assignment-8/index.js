const express=require('express');
const fs =require('fs');
//const { request } = require('http');
const app=express();
const port=3000;

// app.get('/',(req,res)=>{
//     const items=JSON.parse(fs.readFileSync("cart.json"));
//     res.status(200).json({
//         message:"The details of the items purchased are:: ",
//         data:items
//     })
// })

app.get('/cart/:id',(req,res)=>{
    console.log(req.params);
    id=req.params.id;
    const items=JSON.parse(fs.readFileSync("cart.json"));
    const matched_data=items.filter(item=>item.id==id);
    res.status(200).json({
        message:"The desired id product is retrived  ",
        data:matched_data
    })
})

app.get('/cart',(request,response)=>{
    const items=JSON.parse(fs.readFileSync("cart.json"));
    let tot=0;
    for(let k=0;k<items.length;k++){
    tot+=items[k].price*items[k].quantity;
    }
    response.status(200).json({
        message:"Total price of items is retrived",
        data:items,
        'Total_price':tot
    })
})
app.listen(port,()=>{
    console.log("Server active on port 3000");
})
