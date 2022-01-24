import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipes = createAsyncThunk("getUsers", async () => {
  try {
    const result = await fetch("/api");
    console.log(await result.json());
  } catch (error) {
    console.log(error);
  }
});
export const addRecipe = createAsyncThunk(
  "addRecipe",
  async ({ recipeName, description, creator }) => {
    console.log(recipeName, description, creator);
    const config = {
      method: "POST",
      Headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        recipeName,
        description,
        creator,
      }),
    };
    try {
      const data = await (await fetch("/api/newRecipe", config)).json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: { recipes: [], status: null },
  extraReducers: {
    [getRecipes.pending]: (state, action) => {
      state.status = "pending";
    },
    [getRecipes.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.recipes = action.payload;
    },
    [getRecipes.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addRecipe.pending]: (state, action) => {
      state.status = "pending";
    },
    [addRecipe.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.recipes = [action.payload];
    },
    [addRecipe.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default recipesSlice.reducer;
