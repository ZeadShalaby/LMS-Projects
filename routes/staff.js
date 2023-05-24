import { Router } from "express";
import { homeStaff, subjectInfo } from "../controllers/staffs.js";

const router = new Router();

router.get('/', homeStaff)
router.get('/subjects/:_id', subjectInfo)
export default router;