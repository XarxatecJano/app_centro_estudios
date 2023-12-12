import Express from "express";
import { postUser, getUserWithUsername, logUser, logOutUser } from "../controllers/user_controller.js";

const routerUser: Express.Router = Express.Router();

routerUser.post("/", postUser);
routerUser.post("/login", logUser);
routerUser.get("/logOut", logOutUser);
routerUser.get("/:username", getUserWithUsername);




export {routerUser};