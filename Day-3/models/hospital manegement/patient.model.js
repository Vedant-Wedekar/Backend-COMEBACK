import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
name:{
    type :String ,
    required : true ,
    lowercae : true 
},
diagonoswith:{
    type:String,
    required : true,
},
add:{
    type : String ,
    required :true ,

},
age:{
    type : String ,
    required :true ,
},
blood:{
    type : String ,
    required :true ,
},
gender: {
    type :String ,
    enum : ["Male","Female","Male"],
    required:true
},
admitedin:{
    type: mongoose.Schema.type.objectId,
    ref:"Hospital"
}
}
)

export const Patient = mongoose.model('Patient',patientSchema)


