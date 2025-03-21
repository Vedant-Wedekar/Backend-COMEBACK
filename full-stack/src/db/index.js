import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'

const DBconnect = async () => {
try{
  const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log(`DB connected : ${connection.connection.host}`);
  
}
catch(error){
    console.error("error = ",error)
    throw error 
    process.exit(1);
}



}
export default DBconnect