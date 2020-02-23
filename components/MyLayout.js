import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Footer from "./footer";
import { Drawer } from "@material-ui/core";
import { useState } from "react";
import TemporaryDrawer from "./Drawer";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative"
  },

  main: {
    paddingTop: "64px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexGrow: 1,
    height: "100%"
  },

  content: {
    overflow: "auto",
    flexGrow: 1
  }
};

export default function Layout(props) {
  const [open, setOpen] = useState(false);
  const toDoOpen = () => {
    setOpen(!open);
  };

  return (
    <div style={styles.root}>
      <Header toDoOpen={toDoOpen}/>
      <TemporaryDrawer open={open} toDoOpen={toDoOpen}/>
      <div style={styles.main}>
        <Sidebar />
        <div style={styles.content}>
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
