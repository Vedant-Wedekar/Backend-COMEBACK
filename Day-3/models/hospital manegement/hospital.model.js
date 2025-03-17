import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name:{
        type :String ,
        required : true ,
        lowercae : true 
    },
    add1:{
        type : String ,
        required :true ,
    
    },
    add2:{
        type : String ,
        required :true ,
    
    },
    city:{
        type : String ,
        required :true ,
    
    },pincode:{
        type : String ,
        required :true ,
    
    },
    specializedin :[{
        type:String ,

    }]

},{timestamps:true})

export const Hospital = mongoose.model('Hospital', hospitalSchema)