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
    width: "100%",
    height: "100%",
    overflow: "auto",
     flexShrink:1,
flexGrow:0,
  },

  posts: {
    flexGrow:0,
    display: "flex",
    flexShrink: 1,
    overflow:"auto",
    }

};

export default function Layout(props) {
  return (
    <div style={styles.root}>
      <Header />
      <div style={styles.main}>
        <Sidebar />
        <div style={styles.mainmain}>
          <div style={styles.posts}>{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
