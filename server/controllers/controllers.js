import Recipes from "../models/Recipes.js";

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const body = req.body;
  console.log(body);
  const newRecipe = new Recipes(body);
  res.json(body);
  try {
    await newRecipe.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
