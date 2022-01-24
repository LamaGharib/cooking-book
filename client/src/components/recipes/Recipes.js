import React from "react";
import { useSelector } from "react-redux";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  return <div>hello form recipes</div>;
};

export default Recipes;
