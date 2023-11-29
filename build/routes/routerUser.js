import Express from "express";
import { postUser, getUserWithUsername, logUser } from "../controllers/user_controller.js";
const routerUser = Express.Router();
routerUser.post("/", postUser);
routerUser.post("/login", logUser);
routerUser.get("/:username", getUserWithUsername);
export { routerUser };
