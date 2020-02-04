import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
    desktop: {
      width: '100%',
      maxWidth: 360,
      minWidth: 120,
      backgroundColor: theme.palette.background.paper,
      "@media only screen and (max-width: 768px)": {
      display:'none'
      },
    },
      mobile: {
        width: '100%',
        maxWidth: 360,
        minWidth: 120,
        backgroundColor: theme.palette.background.paper,
        "@media only screen and (min-width: 768px)": {
        display:'none'
        

    },}
  }));
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }





export default function Sidebar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

  
<div>
<div className={classes.desktop}>
      <List component="nav" aria-label="main mailbox folders">

        {/* <Button color='primary' variant='contained'>ffgf</Button> */}
       
        <ListItemLink href="/index">    
          <ListItemText primary="Главная" />
         
                            </ListItemLink>
                  <ListItemLink href="/about">    
          <ListItemText primary="О нас" />
          
                  </ListItemLink>
      </List>
      
    </div>



    <div className={classes.mobile}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ListItemLink href="/index"> 
        <MenuItem onClick={handleClose}>Главная</MenuItem>
        </ListItemLink>
        <ListItemLink href="/about"> 
        <MenuItem onClick={handleClose}>О нас</MenuItem>
        </ListItemLink>
      </Menu>
    </div>
    </div>
  );
}
