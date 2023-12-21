import { Document, model, Schema } from "mongoose";

interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    movie?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema <IUserDocument>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    movie: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
    }, 
    {timestamps: true, versionKey: false}
);

const UserModel = model<IUserDocument>('User', UserSchema);

export default UserModel