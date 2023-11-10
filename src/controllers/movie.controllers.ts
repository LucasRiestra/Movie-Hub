import { Request, Response } from 'express';
import MovieModel from '../model/movie.model';
import UserModel from '../model/user.model';

export const createMovies = async (req: Request, res: Response) => {
  const { name } = req.body
  const { poster_image } = req.body
  const { score } = req.body
  const { userId } = req.params

  try {
    const movie = await MovieModel.create({ name, poster_image, score, userId });

    await UserModel.findByIdAndUpdate(
        {_id:userId},
         {$push: {movie: movie._id},}
    );

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json(error);
  };
  //res.status(200).send('Movie created')
};