import express from "express";
import routes from "./routes";
import "./database";
import { resolve } from "path";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }
}

export default new App().app;
