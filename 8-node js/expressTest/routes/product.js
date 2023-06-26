import {
  getAllProduct,
  productHandler,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/products.js";
import { registerView, loginView } from "../controllers/login.js";
import { Router } from "express";
import { getSingleProduct } from "../models/products.js";

export const router = Router();

//Get by ID Method

router.get("/", getAllProduct);
router.get("/:id", productHandler);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.post("/", createProduct);

// router.post("/register", registerView);

// router.get("/login", loginView);
