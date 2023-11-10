import Express from "express";
import { routerSchool } from "./routerSchool.js";
//import { postSchool, getSchools, getSchoolWithId } from "../controllers/school_controller.js";
const router = Express.Router();
router.use("/api/v1/schools", routerSchool);
//router.get("/schools", getSchools);
//router.get("/schools/:id", getSchoolWithId);
export { router };
