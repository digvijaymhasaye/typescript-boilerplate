import { UserModel, NoteModel } from '../managers/sequelize.manager';
import { GetListParams } from '../interfaces';
import { OrderItem, Op } from 'sequelize';

interface Where {
  first_name: any,
  last_name: any,
};

const getList = async (listParams: GetListParams) => {
  const limit: number = listParams.pageSize;
  const offset: number = (listParams.pageNo - 1) * limit;

  let where;

  if (listParams.search) {
    where = {
      first_name: {
        [Op.like]: `%${listParams.search}`,
      },
      last_name: {
        [Op.like]: `%${listParams.search}%`,
      },
    };
  }

  return UserModel.findAll({
    where,
    include: [{
      model: NoteModel,
    }],
    limit,
    offset,
    order: [
      ['created_at', listParams.sortOrder],      
    ],
  });
};

const addOne = async (firstName: string, lastName: string) => UserModel.create({
  first_name: firstName,
  last_name: lastName
});

export default {
  getList,
  addOne,
};
