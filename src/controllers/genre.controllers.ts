import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import GenreModel from '../model/genre.model';

export const createGenres = async (req: Request, res: Response) => {
  const { name } = req.body
  const { movieId } = req.params

  try {

    const genre = await GenreModel.create({ name, movieId });

    await MovieModel.findByIdAndUpdate(
        {_id:movieId},
         {$push: {genre: genre._id},}
    );

    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('Movie created')
};

export const addGenreToMovie = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { movieId } = req.params;

  try {
    const existingGenre = await GenreModel.findOne({ name });

    if (!existingGenre) {
      return res.status(404).json({ error: 'El género no existe.' });
    }

    await MovieModel.findByIdAndUpdate(
      { _id: movieId },
      { $addToSet: { genres: existingGenre._id } },
      { new: true }
    );

    res.status(201).json(existingGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};