import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Footer from "./footer";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
 
  main: {
    display: "flex",
    flexShrink:1,
    flexDirection: "row",
    width: "100%",
    height: "100%"
  },

  mainmain: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flexGrow:0
  }



};

export default function Layout(props) {
  return (
    <div style={styles.root}>
      <Header />
      <div style={styles.main}>
        <Sidebar />
        <div style={styles.mainmain}>
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
