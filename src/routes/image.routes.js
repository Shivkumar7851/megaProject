import { Router } from "express";
import { loadPublicImages, uploadImagePost } from "../controllers/image.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";


const imgRouter = Router();

imgRouter.route('/public').get(loadPublicImages)
imgRouter.route('/upload').post(upload.fields([{name:"imagePost",maxCount:1}]), uploadImagePost)

export default imgRouter