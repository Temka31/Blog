import React from 'react';
import Main from '../components/main';
import Layout from '../components/MyLayout';
import Box from '@material-ui/core/Box';
import fetch from "isomorphic-unfetch";
import MediaCard from '../components/Card'


const Index = props => (
   <Layout>
      <Box display='flex' flexDirection='row' flexWrap='wrap' flexGrow={1}>  
        {props.shows.map(show => (
          <MediaCard key={show.id} show={show} />
        ))}
      </Box>   
      
  </Layout>
  
);




Index.getInitialProps = async function() {
  try{
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  } catch {
    return {
      shows : []
    }
  }

  };
  
  export default Index;