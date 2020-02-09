import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";
import Footer from "./footer";

const styles = {
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
    flexBasis: "100%",
    flexShrink: 0,
    /* overflow: "auto", */
    flexGrow: 1,
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
