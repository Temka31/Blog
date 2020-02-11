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
    flexBasis: "100%",
  },

  mainmain: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    overflow: "auto",
  
    flexShrink: 1,
    flexGrow:1,
  },

  posts: {
    
    display: "flex",
    flexShrink: 1,
    overflow:"auto",
    flexGrow:1,
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
