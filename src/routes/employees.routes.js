import { Router } from "express";
import { deleteEmployee, getEmployees, getEmployee, putEmployee, postEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee)

router.post("/employees", postEmployee);

router.delete("/employees/:id", deleteEmployee);

router.put("/employees/:id", putEmployee);

export default router;