import React from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar'
import ButtonAppBar from './header'


export default function Layout(props) {
  return (
    
    <Box flexGrow={1} display="flex" flexDirection="column" flexWrap='nowrap' width='100%' height='100%'>
         <Box display='flex' flexDirection="column" flexWrap='nowrap'>
          <ButtonAppBar/>
        </Box>
    <Box flexGrow={1} display="flex" flexDirection="row" flexWrap='nowrap' width='100%' height='100%'>
      <Box display="flex" width={300} flexShrink={0} p={0} bgcolor="grey.300">
        <Sidebar/>
      </Box>
      <Box p={1} display="flex" flexBasis='100%' flexDirection="column" flexShrink={1} overflow='auto'  flexGrow={1} bgcolor={'grey.300'}>
        {props.children}  
      </Box>
    </Box>
    </Box>
  );
}