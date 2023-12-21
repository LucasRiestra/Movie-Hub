import { Request, Response, Router } from 'express';
import {  
  createGenre,
  deleteGenre,
  getAllGenres
} from '../controllers/genre.controllers';


const genreRoutes = Router();

genreRoutes.post('/', createGenre);
genreRoutes.get('/', getAllGenres)
genreRoutes.delete('/:genreId', deleteGenre);

export default genreRoutes;