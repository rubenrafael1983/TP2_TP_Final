import { DataTypes, Model } from "sequelize";
import connection from "../Connection/connection.js";

class User extends Model{}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    roleid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'role',
        key: 'roleid'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    tableName: "user", // Especifica el nombre de la tabla aquí
    timestamps: true,
    underscored: true 
  }
);

export default User;
