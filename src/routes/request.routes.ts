import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";
import { publicRequest, protectedRequest, uploadImageWithCloudinary } from "../controllers/request.controller";
import { Router, Request, Response } from "express";



export const requestRouter = Router()

requestRouter.get("/public", publicRequest)
requestRouter.get("/protected", checkJwtMiddleware, protectedRequest)
requestRouter.post("/uploads",uploadImageWithCloudinary)