import { Sequelize } from "sequelize";
import { noteSchema } from "../models";
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

sequelize.sync();

const NoteModel = noteSchema(sequelize);

export {
  sequelize,
  NoteModel,
};
