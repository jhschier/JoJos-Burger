import Sequelize from "sequelize";
import mongoose from "mongoose";

import Product from "../app/models/Product.js";
import User from "../app/models/User.js";
import Category from "../app/models/Category.js";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:DOeADlpnkUnqCraIUuBtHDiqrBZkLeAJ@viaduct.proxy.rlwy.net:44200/railway"
    );
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo:BxvKsRhqADpqRuaZXIyGkgDBIZjDAgYq@monorail.proxy.rlwy.net:31597"
    );
  }
}

export default new Database();
