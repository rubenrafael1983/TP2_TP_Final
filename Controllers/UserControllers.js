import { User, Role } from "../Models/models.js";

class UserControllers {
  async getAllUser(req, res) {
    try {
      const result = await User.findAll({
        attributes: ["id", "name", "last_name", "email", "roleid", "is_active"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async getUserById(req, res) {
    try {
      const {id} = req.params;
      const result = await User.findByPk(id);
      attributes: { exclude: ['password'] } // Excluye el campo 'password' de la consulta
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      console.error(error);
      res.status(400).send({ success: false, message: error });
    }
  }

  async createUser(req, res) {
    try {
      const {id, name, last_name, email, password, roleid, is_active} = req.body;
      const result = await User.create({
        id, 
        name, 
        last_name, 
        email, 
        password, 
        roleid,
        is_active
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, last_name, email, password, roleid, is_active} = req.body;
      const result = await User.update(
        { name, last_name, email, password, roleid, is_active},
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await User.destroy({
        where: {
          id,
        },
      });
      console.log(`🚀 ~ UserControllers ~ updateUser ~ result:`, result);
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default UserControllers;
