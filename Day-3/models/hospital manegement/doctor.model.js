import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type :String ,
        required : true ,
        lowercae : true 
    },
    salary : { 
        type : String ,
        required:true
    },
    qualification:{
        type : String ,
        required:true 
    },
    experienceinYear:{
        type : Number,
        required:true 
    },
    workinhospital:{
        type: mongoose.Schema.type.objectId,
        ref:"Hospital"
    }

},{timestamps:true})

export const Doctor = mongoose.model('Doctor',doctorSchema)