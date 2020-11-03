import { Request, Response, NextFunction } from 'express';
import { noteService } from '../services';
import { getListValidation, addNoteValidation } from '../validations';

const getNotes = async (req: Request, res: Response) => {
  try {
    const {
      search, pageNo, pageSize, sortOrder
    } = await getListValidation.validateAsync(req.query);
    const notes = await noteService.getList({
      search, pageNo, pageSize, sortOrder,
    });
    return res.status(200).send({ notes });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addNote = async (req: Request, res: Response) => {
  try {
    const { user_id, name, description } = await addNoteValidation.validateAsync(req.body);
    const note = await noteService.addNote(user_id, name, description);
    return res.status(200).send({ note });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export default {
  getNotes,
  addNote,
};
