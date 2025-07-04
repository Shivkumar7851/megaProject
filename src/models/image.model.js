import mongoose, { Schema } from "mongoose";

const ImageSchema = new Schema(
    {
        imageUrl:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)

export const Image = mongoose.model("Image",ImageSchema);