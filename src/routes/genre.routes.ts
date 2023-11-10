import { Request, Response, Router } from 'express';
import {
  createGenres,
  addGenreToMovie,
  getAllGenres,
  deleteGenres
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.post('/', createGenres);
genreRoutes.put('/:movieId/', addGenreToMovie);
genreRoutes.get('/', getAllGenres);
genreRoutes.delete('/:genreId', deleteGenres);


export default genreRoutes;