import React from 'react';
import Main from '../components/main';
import Layout from '../components/MyLayout';
import fetch from "isomorphic-unfetch";


const Index = props => (
   <Layout>

          <Main shows={props.shows} />
       
 </Layout>
  
);




Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };
  
  export default Index;