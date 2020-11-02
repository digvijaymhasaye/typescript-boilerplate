import { UserModel, NoteModel } from '../managers/sequelize.manager';

const getList = async () => UserModel.findAll({
  include: [{
    model: NoteModel,
  }]
});

const addOne = async (firstName: string, lastName: string) => UserModel.create({
  first_name: firstName,
  last_name: lastName
});

export default {
  getList,
  addOne,
};
