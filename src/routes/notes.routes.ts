import Router from 'express';
import { noteController } from '../controllers';

const noteRoutes = Router();

noteRoutes.get('/', noteController.getNotes);

noteRoutes.post('/', noteController.addNote);

export default noteRoutes;
