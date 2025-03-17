import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName :{
        type : String ,
        required : true 
    },
    desc:{
        type: String , 
        required : true
    },
    productImage:{
        type : String 
    },
    price : {
        type : number 
        ,
        default : 0
    },
    stock:{
        default:0,
        type: Number
    }
    ,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    }
    ,owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    
})

export const Product = mongoose.model('Product',productSchema)