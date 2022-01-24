import React, { useEffect } from "react";
import Form from "./components/form/Form";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./globalstyles";
import { useDispatch, useSelector } from "react-redux";

import { getRecipes } from "./features/Recipe";

const App = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Form />
    </>
  );
};

export default App;
