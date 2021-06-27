import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import jobAdvertisementService from "../../services/jobAdvertisementService";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import HrmsResultAlert from "../../utilities/customFormControls/HrmsResultAlert";
import HrmsTextField from "../../utilities/customFormControls/HrmsTextField";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function AddJobAdvertisementForm() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [processResult, setProcessResult] = useState(null)
  

  const handleSave = (jobAdvertisementValues) => {
    console.log(jobAdvertisementValues)
    let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer
      .add(jobAdvertisementValues)
      .then((result) => setProcessResult(result.data));
  };


  const requiredMessage="Bu alan gereklidir";
  const numberMessage="Bu alan Sayıdır";


  const schema = Yup.object({
    description: Yup.string(),
    minSallary: Yup.number(numberMessage),
    maxSallary: Yup.number(numberMessage),
    lastApplyDate: Yup.date().required(requiredMessage),
    creationDate: Yup.date().required("Degişecek zorunlu"),
    
    jobPosition: Yup.object({
      id: Yup.number(numberMessage).required(requiredMessage).min(1),
    }),
    city: Yup.object({
      id: Yup.number(numberMessage).required(requiredMessage),
    }),
    employer: Yup.object({
      id: Yup.number(numberMessage).required(requiredMessage),
    }),
    openPositionCount: Yup.number().required("Pozisyon Adedi gereklidir"),
    isActive: Yup.bool().required("isActive gerekli"),
  });

  const initialValues = {
    description: "",
    minSallary: "",
    maxSallary: "",
    lastApplyDate: "",
    creationDate: new Date(),
    jobPosition: {
      id: "",
    },
    city: {
      id: "",
    },
    employer: {
      id: user?.user?.id,
    },
    openPositionCount: "",
    isActive: true,
  };




  return (
    <React.Fragment>
      <Typography variant="h6" color="secondary" >
        {user.user===null?"Giriş Yapmanız Gerekmektedir":null}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleSave(values);
        }}
      >
        <Form>



        <Grid container spacing={3}>
          <HrmsTextField gridSize={6} fieldName="jobPosition.id" label="Iş pozisyonu id"/> 

          <HrmsTextField gridSize={12} fieldName="description" label="Açıklama"/> 
          
          <HrmsTextField gridSize={6} fieldName="minSallary" label="Min-Maaş"/> 

          <HrmsTextField gridSize={6} fieldName="maxSallary" label="Max-Maaş"/> 
          
          <HrmsTextField gridSize={6} fieldName="city.id" label="Şehir id"/> 
          
          <HrmsTextField gridSize={6} fieldName="openPositionCount" label="Açık pozisyon adedi"/> 
          
          <Grid item xs={4}>
            <label>Son Başvuru Tarihi: </label>
            
          </Grid>
          <Grid item xs={6}>
            
            <Field
              name="lastApplyDate"
              type="date"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Ilan Ver
            </Button>
          </div>
        </Grid>
        </Form>
      </Formik>

      <HrmsResultAlert processResult={processResult}/>
    </React.Fragment>
  );
}
