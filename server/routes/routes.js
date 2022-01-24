import express from "express";
import { getRecipes, createRecipe } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/newRecipe", createRecipe);

export default router;
