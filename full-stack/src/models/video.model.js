import mongoose , {Schema} from 'mongoose';
import mongooseAggregatePaginate from
  'mongoose-aggregate-paginate-v2';

const videosSchema = new mongoose.Schema({


videoFile:{
  type:String,
  required:true
},thumbnail:{
  type:String,
  required:true
},owner:[{
  type:mongoose.Schema.Type.ObjectId,
  ref:'User'
}],title:{
  type:String,
  required:true
},description:{
  type:String,
  required:true
},duration:{
  type:Number,
 
},view:{
  type:Number,
  required:true ,
  default:0
},isPublished:{
  type:boolean,
  required:true
  ,default:true
},
}, {timestamps:true});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",videosSchema);