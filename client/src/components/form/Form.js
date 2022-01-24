import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormHolder, MyTextField, MyForm } from "./formStyle";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import Recipe, { addRecipe } from "../../features/Recipe";

const Form = () => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    description: "",
    creator: "",
    img: "",
    like: 0,
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    dispatch(
      addRecipe({
        recipeName: recipe.recipeName,
        description: recipe.description,
        creator: recipe.creator,
      })
    );
  };

  return (
    <>
      <FormHolder>
        <MyForm onSubmit={handleSubmit}>
          <Typography variant="h6">Create Recipe</Typography>
          <MyTextField
            name="recipeName"
            variant="outlined"
            label="Recipe Name"
            value={recipe.recipeName}
            onChange={(e) =>
              setRecipe({ ...recipe, recipeName: e.target.value })
            }
          />
          <MyTextField
            name="description"
            variant="outlined"
            label="description"
            value={recipe.description}
            onChange={(e) =>
              setRecipe({ ...recipe, description: e.target.value })
            }
          />
          <MyTextField
            name="creator"
            variant="outlined"
            label="creator"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, creator: e.target.value })}
          />

          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setRecipe({ ...recipe, img: base64 })}
          />

          <Button type="submit">submit</Button>
        </MyForm>
      </FormHolder>
    </>
  );
};

export default Form;
