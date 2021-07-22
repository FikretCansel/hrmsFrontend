import React from "react";
import { AppBar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "linear-gradient(200deg, #1066c7 30%, #3f51b5 90%)",
  },
  typography: {
    color: "white",
    fontWeight: 600,
    textAlign: "left",
    marginLeft: 10,
    fontSize: 20,
    textAlign: "center",
  },
}));

export default function HrmsCvAppBar({ AppBarTitle }) {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Typography className={classes.typography}>{AppBarTitle}</Typography>
    </AppBar>
  );
}
