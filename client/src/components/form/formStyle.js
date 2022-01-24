import { Paper, TextField } from "@material-ui/core";
import styled from "styled-components";
export const FormHolder = styled(Paper)`
  background-color: pink;
  display: flex;
  width: 70%;

  margin: 10px auto;
  flex-direction: column;
`;

export const MyTextField = styled(TextField)`
  background-color: green;
  width: 30%;
`;
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
`;
