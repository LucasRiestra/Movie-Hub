import { Request, Response, Router } from 'express';
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getMoviesByUserId
} from '../controllers/movie.controllers';

const movieRouter = Router();


movieRouter.post('/:userId', createMovie);
movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.patch('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);
movieRouter.get('/user/:userId', getMoviesByUserId);

export default movieRouter;