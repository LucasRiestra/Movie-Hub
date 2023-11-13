import { Request, Response, Router } from 'express';
import {
  createGenres,
  getAllGenres,
  addGenreToMovie,
  deleteGenres
} from '../controllers/genre.controllers';

const genreRoutes = Router();

genreRoutes.get('/', getAllGenres)
genreRoutes.post('/', createGenres);
genreRoutes.put('/:movieId', addGenreToMovie);
genreRoutes.delete('/:genreId', deleteGenres)

export default genreRoutes;