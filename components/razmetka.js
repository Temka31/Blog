import React from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar'
import Main from './main'





export default function Razm() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} width="30%" bgcolor="grey.300">
        <Sidebar/>
        </Box>
        <Box p={1} width="100%" bgcolor="grey.300">
        <Main/>
        <Main/>
        </Box>
        
      </Box>
    </div>
  );
}