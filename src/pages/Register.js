import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signIn } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { AuthService } from "../services/AuthService";
import { EMPLOYER, JOBSEEKER } from "../constant/userTypes";
import { useHistory } from "react-router";
import RegisterEmployerForm from "../layouts/Register/RegisterEmployerForm";
import RegisterJobSeekerForm from "../layouts/Register/RegisterJobSeekerForm";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const dispatch = useDispatch();

  const [userType, setUserType] = useState(JOBSEEKER);
  
  let history = useHistory();
  const classes = useStyles();

  const registerSubmit = async (event) => {
    event.preventDefault();
    let authSer = new AuthService();
    if (userType === JOBSEEKER) {
      await authSer
        .jobSeekerRegister()
        .then(
          (result) =>
            result.data.success && userAddToDispath(result.data.data, JOBSEEKER)
        );
    } else if (userType === EMPLOYER) {
      await authSer
        .employerRegister()
        .then(
          (result) =>
            result.data.success && userAddToDispath(result.data.data, EMPLOYER)
        );
    }
  };

  const userAddToDispath = (user, userType) => {
    dispatch(signIn({ user, userType }));
    history.push("/jobAdvertisement");
  };



  const selectJobSeeker = () => {
    setUserType(JOBSEEKER);
  };
  const selectEmployer = () => {
    setUserType(EMPLOYER);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kayıt ol
          </Typography>
         
          <Grid direction="row">
            <Button color={userType===JOBSEEKER?"primary":"default"} onClick={selectJobSeeker}>Bireysel</Button>
            <Button color={userType===EMPLOYER?"primary":"default"} onClick={selectEmployer}>Şirket</Button>
          </Grid>
          {userType===EMPLOYER?<RegisterEmployerForm registerSubmit={registerSubmit}/>:null}
          {userType===JOBSEEKER?<RegisterJobSeekerForm registerSubmit={registerSubmit}/>:null}
          
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
