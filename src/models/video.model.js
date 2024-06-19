import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema({
    vidFile:{
        type:String, //url
        required:true
    },
    thumbnail:{
        type:String, 
        required:true
    },
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        type:Number, //url
        required:true
    },
    views:{
        type:Number,
        default:true,
    },
    isPublished:{
        type:Boolean,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }},
    {timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)

export const User = mongoose.model("User",videoSchema)