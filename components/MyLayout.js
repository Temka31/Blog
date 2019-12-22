import React from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar'

export default function Layout(props) {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex"  p={1} >
        <Box p={1} width="20%" bgcolor="grey.300">
        <Sidebar/>
        </Box>
        <Box p={1} width="100%" flexWrap="wrap" flexDirection="row" bgcolor="grey.300">
       
        {props.children}
        </Box>
        
      </Box>
    </div>
  );
}