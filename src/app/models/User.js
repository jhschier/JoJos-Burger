import Sequelize, { Model } from "sequelize";
import { define } from "../../config/database";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        freezeTableName: true,
      }
    );
  }
}

export default User;
