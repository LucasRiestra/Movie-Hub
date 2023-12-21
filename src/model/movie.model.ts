import { Document, model, Schema } from "mongoose";

interface IMovieDocument extends Document {
    name: string;
    poster_image:string;
    score: string;
    genre?:string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const MovieSchema = new Schema <IMovieDocument>({
    name: {
        type: String,
        required: [true, "Name movie is required"]
    },
    poster_image: {
        type: String,
        required: [true, "Poster is required"]
    },
    score: {
        type: String,
        required: [true, "Score is required"]
    },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre'}]
}, 
    {timestamps: true, versionKey: false}
);

const MovieModel = model<IMovieDocument>('Movie', MovieSchema);

export default MovieModel