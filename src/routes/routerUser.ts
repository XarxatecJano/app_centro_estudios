import Express from "express";
import { postUser, getUserWithUsername, logUser, logOutUser } from "../controllers/user_controller.js";

const routerUser: Express.Router = Express.Router();

routerUser.post("/", postUser);
routerUser.post("/login", logUser);
routerUser.get("/:username", getUserWithUsername);
routerUser.get("/logOut", logOutUser)

export {routerUser};