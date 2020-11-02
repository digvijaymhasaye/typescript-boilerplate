import {
  BuildOptions,
  DataTypes,
  Sequelize,
  Model,
} from "sequelize";

interface NoteAttributes {
  id?: number,
  name: string,
  description: string,
  status: number,
}

interface NoteModel extends Model<NoteAttributes>, NoteAttributes { }

type NoteStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): NoteModel,
}

export function noteSchema (sequelize: Sequelize) : NoteStatic { 
  return <NoteStatic>sequelize.define('note', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    status: {
      type: DataTypes.INTEGER(),
      defaultValue: 0,
    },
  });
}
