import React from "react";
import Sidebar from "./Sidebar";
import Header from "./header";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    height: "100%"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  main: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    height: "100%"
    // [theme.breakpoints.down('sm')]: {
    //   color:'yellow'
    // },
    // "@media only screen and (max-width: 768px)": {
    //   color:'red'
    // }
  },
  sidebar: {
    display: "flex",
    width: "20%",
    flexShrink: 1,
  },
  mainmain: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%"
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "grey"
  },

  posts: {
    display: "flex",
    flexBasis: "100%",
    flexShrink: 1,
    overflow: "auto",
    flexGrow: 1,
    height: "100%"
  }
};

export default function Layout(props) {
  return (
    <div style={styles.root}>
      {/* <header style={styles.header}>
        <Header />
      </header> */}
      <Header/>
      <div style={styles.main}>
        <div style={styles.sidebar}>
          <Sidebar />
        </div>
        <div style={styles.mainmain}>
          <div style={styles.posts}>{props.children}</div>
          <div style={styles.footer}>
            ТУТ должно быть оформление футера 2020 год Создатель Артём
          </div>
        </div>
      </div>
    </div>
  );
}
