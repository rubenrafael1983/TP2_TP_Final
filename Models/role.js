import { DataTypes, Model } from "sequelize";
import connection from "../Connection/connection.js";

class Role extends Model {}

Role.init(
  {
    roleid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
    tableName: "role", // Especifica el nombre de la tabla aquí
  }
);

export default Role;
