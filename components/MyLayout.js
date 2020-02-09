import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
 
  main: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%"
  },

  mainmain: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%"
  },

  posts: {
    
    display: "flex",
    

    "@media only screen and (min-width: 768px)": {
      display: "flex",
    flexBasis: "100%",
    flexShrink: 0,
    overflow: "auto",
    flexGrow: 1,
    }

  }
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.main}>
        <Sidebar />
        <div className={classes.mainmain}>
          <div className={classes.posts}>{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
