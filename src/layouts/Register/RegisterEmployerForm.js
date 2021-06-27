import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import HrmsTextField from '../../utilities/customFormControls/HrmsTextField';
import HrmsTypeTextField from '../../utilities/customFormControls/HrmsTypeTextField';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterEmployerForm({ registerSubmit }) {
  const classes = useStyles();

  const [repeatPassword, setRepaitPassword] = useState("");

  const requiredMessage = "Bu alan gereklidir";

  const schema = Yup.object({
    email: Yup.string().email().required(requiredMessage),
    password: Yup.string().min(8, "şifre çok kısa").required(requiredMessage),
    companyName: Yup.string().required(requiredMessage),
    phone: Yup.number().min(8).required(requiredMessage),
    websiteLink: Yup.string().required(requiredMessage)
  });


  const initialValues = {
    email: "",
    password: "",
    companyName: "",
    phone: "",
    websiteLink: ""
  }

  const handleOnSubmit=(values)=>{

    if(repeatPassword===values.password){
      registerSubmit(values)
    }


    console.log(values)
  }



  return (

    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => {
      handleOnSubmit(values);
    }}>
      <Form className={classes.form}>

        <HrmsTextField gridSize={12} fieldName="companyName" label="Şirket Adı" />

        <HrmsTextField gridSize={12} fieldName="email" label="Email" />

        <HrmsTypeTextField type="password" gridSize={12} fieldName="password" label="Şifre" />

        <TextField fullWidth type="password" gridSize={12} value={repeatPassword} onChange={(e)=>setRepaitPassword(e.target.value)} label="Şifre Tekrarı" />

        <HrmsTypeTextField type="number" gridSize={12} fieldName="phone" label="Telefon numarası" />

        <HrmsTextField gridSize={12} fieldName="websiteLink" label="Website link" />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Kayıt ol
        </Button>
      </Form>
    </Formik>
  )
}
