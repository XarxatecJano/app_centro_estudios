import Express from "express";
import { routerSchool } from "./routerSchool.js";
import { routerUser } from "./routerUser.js";
//import { postSchool, getSchools, getSchoolWithId } from "../controllers/school_controller.js";

const router: Express.Router = Express.Router();

router.use("/api/v1/schools", routerSchool);
router.use("/api/v1/users", routerUser);
//router.get("/schools", getSchools);
//router.get("/schools/:id", getSchoolWithId);

export {router};