import { Sequelize } from 'sequelize';
import { noteSchema, userSchema } from '../models';
import config from '../config';

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres',
    logging: true,
    define: {
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      paranoid: true,
    },
  },
);

const NoteModel = noteSchema(sequelize);
const UserModel = userSchema(sequelize);

UserModel.hasMany(NoteModel, { foreignKey: 'user_id' });
NoteModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export {
  sequelize,
  NoteModel,
  UserModel,
};
