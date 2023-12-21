import { Request, Response, NextFunction } from "express";
import { uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";

class CustomTextError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

const checkText = (text: string) => {
  if (text === "text") {
    throw new CustomTextError(400, "this is a custom error");
  }
};

export const publicRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    checkText(req.body.message);
    res.status(200).send({ message: "Public Request" });
  } catch (error) {
    next(error);
  }
};

export const protectedRequest = async (req: Request, res: Response) => {
  res.status(200).send({ message: "Protected Request" });
};

export const uploadImageWithCloudinary = async (req: Request, res: Response) => {
  const image = req.files?.image;
  console.log(image);
  let imageUploaded = null;

  if (image) {
      if ("tempFilePath" in image) {
          imageUploaded = await uploadImage(image.tempFilePath);
          await fs.unlink(image.tempFilePath);
      }
  }

  res.status(200).send({ message: "Solicitud de carga", image: imageUploaded });
};
