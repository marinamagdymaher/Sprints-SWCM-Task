import { Router } from "express";
import {
  getAllCategory,
  categoryHandler,
  deletedCategory,
} from "../controllers/categoryController.js";
export const router = Router();

//Get by ID Method

router.get("/", getAllCategory);
router.get("/:id", categoryHandler);
router.delete("/:id", deletedCategory);
