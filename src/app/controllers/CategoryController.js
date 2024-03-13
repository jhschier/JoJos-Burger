import * as Yup from "yup";

import Category from "../models/Category.js";
import User from "../models/User.js";

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json({ error: "User not authorized." });
    }

    const { filename: path } = request.file;

    const { name } = request.body;

    const categoryExists = await Category.findOne({
      where: { name },
    });

    if (categoryExists) {
      return response.status(400).json({ error: "Category already exists." });
    }

    const { id } = await Category.create({ name, path });

    return response.json({ id, name, path });
  }
  catch(err) {
    console.log(err);
  }

  async index(request, response) {
    const categories = await Category.findAll();

    return response.json(categories);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json({ error: "User not authorized." });
    }

    const { name } = request.body;

    const { id } = request.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return response
        .status(401)
        .json({ error: "Make sure this category exists." });
    }

    let path;
    if (request.file) {
      path = request.file.filename;
    }

    await Category.update(
      {
        name,
        path,
      },
      { where: { id } }
    );

    return response.status(200).json({ id, name, path });
  }
    catch(err) {
      console.log(err)
    }
}

export default new CategoryController();
