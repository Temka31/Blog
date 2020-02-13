import React from "react";
import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import MediaCard from "../components/MediaCard";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexGrow:1,
  }
};

const Index = props => (
  <Layout>
    <div style={styles.root}>
      {props.shows.map(show => (
        <MediaCard key={show.id} show={show} />
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  try {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      shows: data.map(entry => entry.show)
    };
  } catch {
    return {
      shows: []
    };
  }
};

export default Index;
