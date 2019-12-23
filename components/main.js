import React from 'react';
import Box from '@material-ui/core/Box';
import MediaCard from './Card'

export default function Main(props) {
  return (
    //<div style={{ width: '100%' }}>
      
        
          <ul>
            <Box display="flex"  flexWrap="wrap"
             justifyContent="space-around"
             bgcolor="background.paper">
        {props.shows.map(show => (
          <MediaCard key={show.id} show={show} />
        ))}
        </Box>
      </ul>           
             
        
      
   // </div>
  );
}