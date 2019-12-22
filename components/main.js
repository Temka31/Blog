import React from 'react';
import Box from '@material-ui/core/Box';
import MediaCard from './Card'

export default function Main(props) {
  return (
    //<div style={{ width: '100%' }}>
      <Box display="flex"  flexWrap="wrap"
             
       bgcolor="background.paper">
        
          <ul>
        {props.shows.map(show => (
          <MediaCard key={show.id} show={show} />
        ))}
      </ul>           
             
        </Box>
      
   // </div>
  );
}