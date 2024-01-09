import { Router } from "express";
import { v4 } from "uuid";

import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (request, response) => {
  const users = await User.create({
    id: v4(),
    name: "JoJo",
    email: "jhschier30@hotmail.com",
    password_hash: "123321",
    admin: true,
  });

  return response.json(users);
});

export default routes;
