const mongoose=require('mongoose');
exports.dbConn= async ()=>{
    try{
        const dbURL="mongodb+srv://anwesha:anwesha2003@cluster0.bfhp7.mongodb.net/productdb?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Database Connected");
    }catch(err){
        console.log('database error', err.message);
    }
}