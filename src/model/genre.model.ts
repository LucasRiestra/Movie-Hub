import { Document, model, Schema } from "mongoose";

interface IGenreDocument extends Document {
    name: string;
}

const GenreSchema = new Schema <IGenreDocument>({
    name: {
        type: String,
        required: [true, "Name genre is required"]
    }
}, 
    {timestamps: true, versionKey: false}
);

const GenreModel = model<IGenreDocument>('Genre', GenreSchema);

export default GenreModel