import Router from 'express';
import { userController } from '../controllers';

const userRoutes = Router();

userRoutes.get('/', userController.getUsers);

userRoutes.post('/', userController.addUser);

export default userRoutes;
