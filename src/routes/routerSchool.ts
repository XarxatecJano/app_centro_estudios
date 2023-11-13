import Express from "express";
import { postSchool, getSchools, getSchoolWithId, deleteSchoolWithId, updateSchoolFull, updateSchoolPartial} from "../controllers/school_controller.js";


const routerSchool: Express.Router = Express.Router();

routerSchool.post("/", postSchool);
routerSchool.get("/", getSchools);
routerSchool.get("/:id", getSchoolWithId);
routerSchool.delete("/:id", deleteSchoolWithId);
routerSchool.put("/", updateSchoolFull);
routerSchool.patch("/", updateSchoolPartial);

export {routerSchool};