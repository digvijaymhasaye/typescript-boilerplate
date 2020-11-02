import { Request, Response, NextFunction } from "express";
import { noteService } from "../services";

const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await noteService.getList();
    return res.status(200).send({ notes });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addNote = async (req: Request, res: Response) => {
  try {
    console.info('Add note', req.body);
    const note = await noteService.addNote(req.body);
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
