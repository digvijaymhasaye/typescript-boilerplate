import { NoteModel } from '../managers/sequelize.manager';

const getList = async () => NoteModel.findAll();

const addNote = async (userId: number, name: string, description: string) => NoteModel.create({
  name,
  description,
  user_id: userId,
});

export default {
  getList,
  addNote,
};
