import { Image } from "../models/image.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asynchandler.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const uploadImagePost = asyncHandler(async(req,res)=>{
    const ImagePostLocalPath = req.files?.imagePost?.[0]?.path;
    if(!ImagePostLocalPath){
        throw new ApiError("400","file is rquired to upload")
    }
    const ImagePost = await uploadOnCloudinary(ImagePostLocalPath);

    if(!ImagePost){
        throw new ApiError("Avatar file filed to upload on cloudinary")
    }
    const imagePost = await Image.create(
        {
            imageUrl:ImagePost.url,
        }
    )
    const uploadedImagePost = await Image.findById(imagePost._id).select()
    if(!uploadedImagePost){
        throw new ApiError(500,"Something went wrong while registering the user")
        
    }
    return res
    .status(201)
    .json(new ApiResponse(201, uploadedImagePost,"Image post uploaded successfully"))
    
})

const loadPublicImages = asyncHandler(async(req,res)=>{
    const ImageData = await Image.find()
    return res
    .status(200)
    .json(new ApiResponse(200,ImageData,"datafetched Successfully"))
})

export{
    loadPublicImages,
    uploadImagePost
}