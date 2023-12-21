import {v2 as cloudinary} from "cloudinary"
import CONFIG from "../config/config"

cloudinary.config(CONFIG.cloudinary)

export const uploadImage = async (imagePath: string) => {
    return await cloudinary.uploader.upload(imagePath, {
        resource_type: "image",
        folder: 'backend',
        height: 600,
        width: 600,
        crop: 'scale',
        overwrite: true
    })
}