import { Router } from "express";
import { CreateUserController } from "./modules/user/CreateUserController";

const routes = Router();

routes.post("/users", new CreateUserController().handle);

export { routes };
