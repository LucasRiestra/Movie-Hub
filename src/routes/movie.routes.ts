import { Request, Response, Router } from 'express';
import {
  createMovies,
  getAllMovies,
  getMovieById,
  updateMovies,
  deleteMovies
} from '../controllers/movie.controllers';

const movieRouter = Router();


movieRouter.post('/:userId', createMovies);

movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.patch('/:movieId', updateMovies);
movieRouter.delete('/:movieId', deleteMovies);

export default movieRouter;