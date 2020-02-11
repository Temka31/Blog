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
    height: "100%",
    flexGrow: 0,
  },

  mainmain: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "auto",
  flexBasis: "100%",
  flexShrink: 1,
  },

  posts: {
    
    display: "flex",
    overflow:"auto",
    flexShrink: 1,
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
