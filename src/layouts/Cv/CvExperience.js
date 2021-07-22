import React from 'react';
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import HrmsTextField from "../../utilities/customFormControls/HrmsTextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import HrmsTypeTextField from "../../utilities/customFormControls/HrmsTypeTextField";


const validationSchema = Yup.object({
    experiences: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("Şirket adı gerekli"),
        startDate: Yup.date().required("Başlama tarihi gerekli"),
        departureDate: Yup.date(),
      })
    ),
  });
  var initialValues = {
    experiences: [
      {
        companyName: "",
        startDate: "",
        departureDate: "",
      },
    ]
  };
export default function Experience({BackToHomeMenuButton,setExperiences}) {
  const handleSubmit=(values)=>{
    setExperiences(values);
  }


    return (
        <div>
        <br/>
        <br/>
        <h4 style={{textAlign:"center"}}>Deneyim Bilgileri</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="experiences"
              render={(arrayHelpers) => {
                const experiences = values.experiences;
                return (
                  <div>
                    {experiences && experiences.length > 0
                      ? experiences.map((user, index) => (
                          <div key={index}>
                            <Grid container>
                              <Grid item xs={1} />
                              <HrmsTextField
                                gridSize={2}
                                fieldName={`experiences.${index}.companyName`}
                                label="Şirket Adı"
                              />

                              <Grid item xs={1} />
                              <HrmsTypeTextField
                                type="date"
                                gridSize={2}
                                fieldName={`experiences.${index}.startDate`}
                                label="."
                              />

                              <Grid item xs={1} />
                              <HrmsTypeTextField
                                type="date"
                                gridSize={2}
                                fieldName={`experiences.${index}.departureDate`}
                                label="."
                              />
                        
                              <Grid item xs={1}>
                                <Button
                                  variant="contained"
                                  type="button"
                                  style={{ marginTop: "25px" }}
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        ))
                      : null}
                      <Grid style={{marginTop: "50px"}} container justify="center">
                    <Button
                      color="primary"
                      variant="contained"
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          schoolName: "",
                          programName: "",
                          startDate: "",
                          graduationDate: "",
                        })
                      } // insert an empty string at a position
                    >
                      +
                    </Button>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    
                      <Button variant="contained" color="primary" type="submit" style={{marginLeft: "50px"}}>
                        Kaydet
                      </Button>
                      <BackToHomeMenuButton/>
                  </div>
                );
              }}
            />
            <hr />
          </Form>
        )}
      />
    </div>
    )
}
