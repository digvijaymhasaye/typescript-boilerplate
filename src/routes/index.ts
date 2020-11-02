import Router from 'express';
import noteRoutes from './notes.routes';
import userRoutes from './users.routes';

const apiRoutes = Router();

apiRoutes.use('/notes', noteRoutes);
apiRoutes.use('/users', userRoutes);

export default apiRoutes;
