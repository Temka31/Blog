import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Footer from "./footer";

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
    height:"100%"
  },

  content: {
    overflow: "auto",
    flexGrow: 1
  }
};

export default function Layout(props) {
  return (
    <div style={styles.root}>
      <Header />
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
