import Express from "express";
import { saveSchool, findSchools, findSchoolWithId } from "../controllers/school_controller.js";
const router = Express.Router();
router.post("/schools", saveSchool);
router.get("/schools", findSchools);
router.get("/schools/:id", findSchoolWithId);
export { router };
