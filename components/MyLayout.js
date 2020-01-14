import React from 'react';
import Box from '@material-ui/core/Box';
import Sidebar from './Sidebar'
import ButtonAppBar from './header'
import TableFooter from '@material-ui/core/TableFooter'

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
      <Box display='flex' flexDirection="column" flexWrap='nowrap'>
      <Box p={1} display="flex" flexBasis='100%' flexShrink={2} overflow='auto'  flexGrow={1} bgcolor={'grey.300'}>
        {props.children}  
        
      </Box>
      <Box display='flex' flexDirection="row" flexWrap='wrap'  bgcolor={'grey.300'}>
         <TableFooter>
         ТУТ должно быть оформление футера
         2020 год 
         Создатель Артём
         
         </TableFooter>
        </Box>
      </Box>
    </Box>
    
    </Box>
  );
}