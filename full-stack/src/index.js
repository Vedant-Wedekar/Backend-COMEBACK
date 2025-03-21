// require('dotenv').config({path:'./config.env'})
import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
import {DB_NAME} from './constants.js'
import DBconnect from './db/index.js';

dotenv.config({path:'./config.env'});
DBconnect();












// import express from 'express';

// const app = express();
// //if he 

// ;(async()=>{
//        try{
//                          await mongoose.connect(`${process.env.
//                             MONGODB_URI}/${DB_NAME}`)

//                               app.on("error",(error)=>{
//                                 console.error("error :=",error)
//                                    throw error
//                                       })

//     app.listen(process.env.PORT,()=>{console.log(`server is running on port ${process.env.PORT}`)})                                  
//        }catch(error){

//             console.error("error :=",error)
//             throw error
//         }




// })()