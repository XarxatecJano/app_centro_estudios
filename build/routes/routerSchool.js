import Express from "express";
import { postSchool } from "../controllers/school_controller.js";
const routerSchool = Express.Router();
routerSchool.post("/", postSchool);
export { routerSchool };
