import React from 'react'
import { TextField } from 'formik-material-ui';
import { Field } from "formik";
import Grid from "@material-ui/core/Grid";

export default function HrmsTextField({gridSize,type,fieldName,label}) {
    return (
          <Grid item xs={gridSize} style={{marginTop:"10px"}}>
            <Field
            type={type}
              fullWidth
              id={fieldName}
              name={fieldName}
              label={label}
              component={TextField}
            />
          </Grid>
    )
}
