import { DataTypes, Model } from "sequelize";
import connection from "../Connection/connection.js";
import bcrypt from "bcrypt";
class User extends Model {

  comparePass = async (password) => {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };

}

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
      unique: true,  // Añade la restricción de unicidad aquí
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

User.beforeCreate(async (user) => {
  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, genSalt);
  user.password = hashedPassword;
});

export default User;
