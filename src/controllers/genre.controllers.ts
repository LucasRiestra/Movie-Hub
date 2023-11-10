import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import GenreModel from '../model/genre.model';

export const createGenres = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const genre = await GenreModel.create({ name });

    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json(error);
  };
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
      { $addToSet: { genre: existingGenre._id } },
      { new: true }
    );

    res.status(202).json(existingGenre);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllGenres = async (req: Request, res: Response) => {
  try {
      const genre = await GenreModel.find();
      res.status(200).json(genre);
  } catch (error) {
      res.status(500).json(error);
  }
};

export const deleteGenres = async (req: Request, res: Response) => {
  const { genreId } = req.params;

  try {
      const genre = await GenreModel.findByIdAndDelete({ _id: genreId });

      res.status(200).json(genre);

  } catch (error) {
      res.status(500).json(error);
  }
};