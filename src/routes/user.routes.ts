import { Request, Response, Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail
} from '../controllers/user.controllers';


const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:userId', getUserById)
userRoutes.post('/', createUser);
userRoutes.patch('/:userId', updateUser);
userRoutes.delete('/:userId', deleteUser);
userRoutes.get('/email/:userEmail', getUserByEmail)


export default userRoutes;