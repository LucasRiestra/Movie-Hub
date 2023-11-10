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

export const getAllMovies = async (req: Request, res: Response) => {
  try {
      const movie = await MovieModel.find().populate('genre');
      res.status(200).json(movie);
  } catch (error) {
      res.status(500).json(error);
  }
};

export const getMovieById = async (req: Request, rest: Response) => {
  const { movieId } = req.params

  try {
    const movie = (await MovieModel.findById({ _id: movieId }).populate('genre'))

    rest.status(200).json(movie);
  } catch (error) {
    rest.status(500).json(error)
  }
}

export const updateMovies = async (req: Request, res: Response) => {
  const {movieId} = req.params;
  const {name, poster_image, score} = req.body;

  try {
    const movie = await MovieModel.findByIdAndUpdate(
        { _id: movieId },
       { 
        $set: { name: name, poster_image: poster_image, score: score } 
      },
      { new: true } 
       );

       res.status(200).json(movie);

  } catch (error) {
      res.status(500).json(error);
  }
  //res.status(200).send('User updated');
};

export const deleteMovies = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
      const movie = await MovieModel.findByIdAndDelete({ _id: movieId });

      res.status(200).json(movie);

  } catch (error) {
      res.status(500).json(error);
  }
};