import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Listmenu from "./listMenu";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  btn: {
    color: "white"
  }
});
export default function TemporaryDrawer(props) {
  const classes = useStyles();


  

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toDoOpen}
      onKeyDown={props.toDoOpen}
    >
      <Listmenu />
    </div>
  );

  return (
    <div>
      {/* <Button className={classes.btn} onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button> */}
      <Drawer open={props.open} onClose={props.toDoOpen}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
