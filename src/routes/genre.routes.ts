import { Request, Response, Router } from 'express';
import {
  createGenres,
  addGenreToMovie
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.post('/:movieId', createGenres);
genreRoutes.post('/:movieId', addGenreToMovie);

export default genreRoutes;