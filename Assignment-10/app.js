const express = require('express');
const {dbConn}=require('./config/db');
const proRoute = require('./product');

const app = express();

const port = 2000;
app.use(express.json());

app.use('/product',proRoute);

dbConn();
app.listen(port,()=>{
    console.log('Server started at port 2000');
})