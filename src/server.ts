import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';
import {requestRouter} from './routes/request.routes';
import FileUpload from 'express-fileupload';
;


const app = express();

// Cors configuration
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   optionsSuccessStatus: 200,
// };
app.use(cors());
app.use(express.json());
app.use(FileUpload({
  useTempFiles: true,
  tempFileDir: './uploads',
  limits: {fileSize: 10000000},
  abortOnLimit: true
}));
// Routes
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/genre", genreRoutes);
app.use("/", requestRouter);



export default app;
