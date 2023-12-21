import {v2 as cloudinary} from "cloudinary"
import CONFIG from "../config/config"

cloudinary.config(CONFIG.cloudinary)

export const uploadImage = async (imagePath: string) => {
    return await cloudinary.uploader.upload(imagePath, {
        resource_type: "image",
        folder: 'backend',
        height: 650,
        width: 400,
        crop: 'scale',
        overwrite: true
    })
}