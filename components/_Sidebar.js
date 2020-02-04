import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minWidth: 120,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar () {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        {/* <Button color='primary' variant='contained'>ffgf</Button> */}
       
        <ListItemLink href="/index">    
          <ListItemText primary="Главная" />
         
                            </ListItemLink>
                  <ListItemLink href="/about">    
          <ListItemText primary="О нас" />
          
                  </ListItemLink>
      </List>
      
    </Box>
  );
}


