import Express from "express";
import { postUser, getUserWithUsername, logUser, logOutUser, userRecovery, setNewPassword } from "../controllers/user_controller.js";

const routerUser: Express.Router = Express.Router();

routerUser.post("/", postUser);
routerUser.post("/login", logUser);
routerUser.post("/recovery", userRecovery);
routerUser.get("/recovery/:username", setNewPassword);
//routerUser.patch("/newPassword", changeUserPassword);
routerUser.get("/logOut", logOutUser);
routerUser.get("/:username", getUserWithUsername);





export {routerUser};