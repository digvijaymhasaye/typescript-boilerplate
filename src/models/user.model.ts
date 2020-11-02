import {
  BuildOptions,
  DataTypes,
  Sequelize,
  Model,
} from 'sequelize';

interface UserAttributes {
  id: number,
  first_name: string,
  last_name: string,
}

interface UserModel extends Model<UserAttributes>, UserAttributes { }

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel,
}

export default function userSchema (sequelize: Sequelize) : UserStatic { 
  return <UserStatic>sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
}
