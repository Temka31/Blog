import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  export default function Listmenu() {
    
   
  
    return (
      
          <List component="nav" aria-label="main mailbox folders">
            <ListItemLink href="/index">
              <ListItemText primary="Главная" />
            </ListItemLink>
            <ListItemLink href="/about">
              <ListItemText primary="О нас" />
            </ListItemLink>
          </List>
        
  
    );
  }