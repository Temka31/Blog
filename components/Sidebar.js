import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Listmenu from "./listMenu";

const useStyles = makeStyles(theme => ({
  desktop: {
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
    "@media only screen and (max-width: 768px)": {
      display: "none"
    }
  },
  /* mobile: {
    display: "flex",
    flexShrink: 1,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "@media only screen and (min-width: 768px)": {
      display: "none"
    }
  } */
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar() {
  const classes = useStyles();
 

  return (
    
      <div className={classes.desktop}>
        <Listmenu/>
      </div>

  );
}
