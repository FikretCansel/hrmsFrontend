import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  toolBar: {
    background: "linear-gradient(200deg, #1066c7 30%, #3f51b5 90%)",
    minHeight: "unset",
    height: "3%",
    padding: 0,
    margin: "0 0.5% 0 0",
  },
  closeIcon: {
    marginLeft: "auto",
  },
  appBar: {
    background: "linear-gradient(200deg, #1066c7 30%, #3f51b5 90%)",
  },
  typography: {
    color: "white",
    fontWeight: 600,
    textAlign: "center",
    marginLeft: 10,
    fontSize: 20,
  },
}));

export default function UploadPhotoAppBar({ handleCvAddClose }) {
  const classes = useStyles();

  return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.typography}>Fotograf Düzenle</Typography>
          <IconButton
            className={classes.closeIcon}
            edge="end"
            color="inherit"
            onClick={handleCvAddClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
