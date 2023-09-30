import { Router } from "express";
import {
  addDepartments,
  showdepartments,
  savedept,
  editDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/departments.js";
import {
  savesubject,
  addsubject,
  showsubject,
  editsubject,
  updateSubject,
  deleteSubject,
} from "../controllers/subjects.js";
import {
  createstudent,
  deleteStudent,
  editStudent,
  savestudent,
  showstudents,
  updateStudent,
} from "../controllers/students.js";
import {
  createstaff,
  deleteStaff,
  editStaff,
  savestaff,
  showstaffs,
  updateStaff,
} from "../controllers/staffs.js";
import { admin } from "../controllers/adminHome.js";
import {
  AddAdmin,
  deleteAdmin,
  editAdmin,
  saveAdmin,
  showAdmins,
  updateAdmin,
} from "../controllers/admins.js";
const router = new Router();

router.get("/", admin);

router.get("/addDepartment", addDepartments);
router.post("/addDepartment", savedept);
router.get("/departments", showdepartments);
router.get("/departments/:_id/edit", editDepartment);
router.put("/departments/:_id", updateDepartment);
router.delete("/departments/:_id", deleteDepartment);

router.get("/addSubject", addsubject);
router.post("/addSubject", savesubject);
router.get("/subjects", showsubject);
router.get("/subjects/:_id/edit", editsubject);
router.put("/subjects/:_id", updateSubject);
router.delete("/subjects/:_id", deleteSubject);

router.get("/addAdmin", AddAdmin);
router.post("/addAdmin", saveAdmin);
router.get("/admins", showAdmins);
router.get("/admins/:_id/edit", editAdmin);
router.put("/admins/:_id", updateAdmin);
router.delete("/admins/:_id", deleteAdmin);

router.get("/createStaff", createstaff);
router.post("/createStaff", savestaff);
router.get("/staffs", showstaffs);
router.get("/staffs/:_id/edit", editStaff);
router.put("/staffs/:_id", updateStaff);
router.delete("/staffs/:_id", deleteStaff);

router.get("/createStudent", createstudent);
router.post("/createStudent", savestudent);
router.get("/students", showstudents);
router.get("/students/:_id/edit", editStudent);
router.put("/students/:_id", updateStudent);
router.delete("/students/:_id", deleteStudent);

export default router;
