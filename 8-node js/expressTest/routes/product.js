import {
  getAllProduct,
  productHandler,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/products.js";
// import {verifyToken} from "../models/user.js"

import { Router } from "express";

export const router = Router();

//Get by ID Method

router.get("/", getAllProduct);
router.get("/:id", productHandler);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.post("/", createProduct);

