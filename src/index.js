import dotenv from "dotenv";
import connectDB from "./db/index.js";
import  {app } from "./app.js";
// import app  from "./app.js";

dotenv.config({
    path: './.env'
});
//-r dotenv/config --experimental-json-modules
const startServer = async ()=>{
    try{
        await connectDB();
        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });

    }
    catch(err){
        console.log("MONGO db connection failed !!! error here",err);
    }
};
startServer();











// import express from "express";
// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on ${process.env.PORT}`)
//         })
//     } 
//     catch (error) {
//         console.error("ERROR",error)
//         throw err
//     }
// })()
