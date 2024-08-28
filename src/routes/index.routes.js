import { Router } from "express";
import { getPing, testCase } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", getPing);

router.get("/prueba", testCase)

export default router