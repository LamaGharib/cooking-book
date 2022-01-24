import React from "react";
import { Avatar, IconButton, TextField, Toolbar } from "@material-ui/core";
import { NavHolder, Search } from "./navStyle";
import Icon from "@mui/material/Icon";

const Nav = () => {
  return (
    <NavHolder>
      <Toolbar>
        <IconButton>
          <Icon>menu</Icon>
        </IconButton>
        <div style={{ flex: 1 }}></div>
        <Search component="form">
          <TextField label="Search..." variant="outlined"></TextField>
        </Search>
        <Avatar>L</Avatar>
      </Toolbar>
    </NavHolder>
  );
};

export default Nav;
