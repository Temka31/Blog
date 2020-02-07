import React from "react";
import TemporaryDrawer from "./Drawer"

const styles = {
  root: {
    display: "flex",
    position: "static",
    flexShrink: 0,
    height: "50px",
    background: "blue",
    flexDirection: "column",
    flexWrap: "nowrap"
  }
};

export default function Header() {
  return (
    <header style={styles.root}>
    <TemporaryDrawer/> 
    <h1>News</h1>
    </header>
  );
}
