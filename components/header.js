import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
    position:"static",
    height:'50px',
    background:'blue'
  },
  header: {   
    height:'50px',
    background:'blue'
  },
  title: {
    flexGrow: 1,
    // [theme.breakpoints.down('sm')]: {
    //   color:'yellow'
    // },
    // "@media only screen and (max-width: 768px)": {
    //   color:'red'
    // }
  },
};

export default function Header() {
  

  return (
    <header style={styles.header}>
      News
          
        
    </header>
  );
}
