'use strict';
import { NoteModel } from "../managers/sequelize.manager";
import { AddNote } from '../interfaces';

const getList = async () => NoteModel.findAll();

const addNote = async (addNoteRequest: AddNote) => {
  console.info(addNoteRequest);
  return NoteModel.create({
    name: addNoteRequest.name,
    description: addNoteRequest.description,
  });
}
export default {
  getList,
  addNote,
};
