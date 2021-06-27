import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import HrmsTextField from '../../utilities/customFormControls/HrmsTextField';
import HrmsTypeTextField from '../../utilities/customFormControls/HrmsTypeTextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function RegisterJobSeekerForm({registerSubmit}) {
    const classes = useStyles();
    const [repeatPassword, setRepaitPassword] = useState("");

    const requiredMessage = "Bu alan gereklidir";
  
    const schema = Yup.object({
      email: Yup.string().email().required(requiredMessage),
      password: Yup.string().min(8, "şifre çok kısa").required(requiredMessage),
      lastName: Yup.string().required(requiredMessage),
      firstName: Yup.string().required(requiredMessage),
      nationalIdentityNumber: Yup.number().required(requiredMessage),
      birthDate: Yup.date().required(requiredMessage),
    });
  
  
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      nationalIdentityNumber: "",
      birthDate:""
    }
  
    const handleOnSubmit=(values)=>{
  

        registerSubmit(values)

  
  
      console.log(values)
    }


    return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => {
        handleOnSubmit(values);
      }}>
        <Form className={classes.form}>
        <Grid container spacing={2}>
  
          <HrmsTextField gridSize={6} fieldName="firstName" label="Ad" />
  
          <HrmsTextField gridSize={6} fieldName="lastName" label="Soyad" />

          <HrmsTextField gridSize={12} fieldName="email" label="Email" />
  
          <HrmsTypeTextField type="password" gridSize={12} fieldName="password" label="Şifre" />
  
          <TextField fullWidth type="password" gridSize={11} value={repeatPassword} onChange={(e)=>setRepaitPassword(e.target.value)} label="Şifre Tekrarı" />
  
          <HrmsTypeTextField type="number" gridSize={12} fieldName="nationalIdentityNumber" label="Tc Kimlik" />

          <label>Doğum Tarihi : </label>
          <HrmsTypeTextField type="date" gridSize={6} fieldName="birthDate" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Kayıt ol
          </Button>
          </Grid>
        </Form>
      </Formik>
    )
}
