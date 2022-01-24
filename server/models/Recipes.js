import mongoose from "mongoose";

const RecipesSchema = mongoose.Schema({
  recipeName: String,
  description: String,
  creator: String,
  tags: [String],
  img: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Recipes = mongoose.model("Recipes", RecipesSchema);
export default Recipes;
