import { Router } from "express";
import {createProject, getProjects} from "../controllers/project.controller.js";

const router = Router();

// Routes
router.post("/", createProject);
router.get("/", getProjects);
router.put("/:id", );
router.delete("/:id", );
router.get("/:id", );


export default router;