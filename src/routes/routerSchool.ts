import Express from "express";
import { postSchool, getSchools, getSchoolWithId, deleteSchoolWithId, updateSchoolFull, updateSchoolPartial} from "../controllers/school_controller.js";
import { isUserAuthenticated } from "../utils/isUserAuthenticated.js";
import { userIsAdmin } from "../utils/userIsAdmin.js";


const routerSchool: Express.Router = Express.Router();

routerSchool.post("/", postSchool);
routerSchool.get("/", isUserAuthenticated, getSchools);
routerSchool.get("/:id", isUserAuthenticated, getSchoolWithId);
routerSchool.delete("/:id", isUserAuthenticated, userIsAdmin, deleteSchoolWithId);
routerSchool.put("/",isUserAuthenticated, updateSchoolFull);
routerSchool.patch("/", isUserAuthenticated, updateSchoolPartial);

export {routerSchool};