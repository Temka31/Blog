import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    left:0,
    top:0
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

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} >
            <TemporaryDrawer />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    
  );
}
