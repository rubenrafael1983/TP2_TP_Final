import Role from "./role.js";
import User from "./user.js";

Role.hasMany(User, {foreignKey:"roleId"})
User.belongsTo(Role, {foreignKey:"roleId"})




export {Role, User};