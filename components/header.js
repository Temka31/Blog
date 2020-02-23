import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './Drawer'
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
root:{
  display: "flex",
  position: "fixed",
  height: "64px",
  width: "100%",
},
  menuButton: {
    marginRight: theme.spacing(2),
    "@media only screen and (min-width: 768px)": {
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={props.toDoOpen} color="inherit">
      
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
