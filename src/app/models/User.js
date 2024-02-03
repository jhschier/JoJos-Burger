import Sequelize, { Model } from "sequelize";
import { define } from "../../config/database";

import bcrypt from "bcrypt";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
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

    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 10);
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
