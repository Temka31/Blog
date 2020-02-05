import React from "react";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

export default function Footer() {
  return (
    <footer style={styles.root}>
      <h2>Разработка Артема</h2>
    </footer>
  );
}
