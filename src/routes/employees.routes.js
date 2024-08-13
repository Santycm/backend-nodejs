import { Router } from "express";
import { deleteEmployee, getEmployees, getEmployee, putEmployee, postEmployee, patchEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee)

router.post("/employees", postEmployee);

router.delete("/employees/:id", deleteEmployee);

router.put("/employees/:id", putEmployee);

router.patch("/employees/:id", patchEmployee);

export default router;