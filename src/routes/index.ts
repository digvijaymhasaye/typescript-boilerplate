import Router from "express";
import { noteController } from "../controllers";

const apiRoutes = Router();

apiRoutes.get('/', noteController.getNotes);

apiRoutes.post('/', noteController.addNote);

export default apiRoutes;
