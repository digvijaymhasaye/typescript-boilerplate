import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';
import { getListValidation, addUserValidation } from '../validations';

const getUsers = async (req: Request, res: Response) => {
  try {
    const {
      search, pageNo, pageSize, sortOrder
    } = await getListValidation.validateAsync(req.query);
    const users = await userService.getList({ search, pageNo, pageSize, sortOrder });
    return res.status(200).send({ users });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name } = await addUserValidation.validateAsync(req.body);
    const user = await userService.addOne(first_name, last_name);
    return res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export default {
  getUsers,
  addUser,
};
