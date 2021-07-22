import React, { useEffect } from "react";
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import HrmsTextField from "../../utilities/customFormControls/HrmsTextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HrmsTypeTextField from "../../utilities/customFormControls/HrmsTypeTextField";

const validationSchema = Yup.object({
  educations: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("Okul adı gerekli"),
      programName: Yup.string().required("program adı gerekli"),
      startDate: Yup.date().required("Başlama tarihi gerekli"),
      graduationDate: Yup.date(),
    })
  ),
});

export default function CvEducation({ BackToHomeMenuButton, setEducations, educations }) {
  const initialValues = {
    educations:[
      {
        schoolName:""
      }
    ]
  };


  useEffect(() => {
    console.log(educations);

  }, [])


  const handleSubmit = (values) => {
    setEducations(values);
    console.log("handle çalıştı");
  }

  return (
    <div>
      <br />
      <br />
      <h4 style={{ textAlign: "center" }}>Egitim Bilgileri</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="educations"
              render={(arrayHelpers) => {
                const educations = values.educations;
                return (
                  <div>
                    {educations && educations.length > 0
                      ? educations.map((edu, index) => (
                        <div key={index}>
                          <Grid container>
                            <Grid item xs={1} />
                            <HrmsTextField
                              gridSize={2}
                              fieldName={`educations.${index}.schoolName`}
                              label="Okul Adı"
                            />

                            <HrmsTextField
                              gridSize={2}
                              fieldName={`educations.${index}.programName`}
                              label="Program Adı"
                            />

                            <Grid item xs={1} />
                            <HrmsTypeTextField
                              type="date"
                              gridSize={2}
                              fieldName={`educations.${index}.startDate`}
                              label="."
                            />

                            <Grid item xs={1} />
                            <HrmsTypeTextField
                              type="date"
                              gridSize={2}
                              fieldName={`educations.${index}.graduationDate`}
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
                    <Grid style={{ marginTop: "50px" }} container justify="center">
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

                    <Button variant="contained" color="primary" type="submit" style={{ marginLeft: "50px" }}>
                      Kaydet
                    </Button>
                    <BackToHomeMenuButton />
                  </div>
                );
              }}
            />
            <hr />
          </Form>
        )}
      />
    </div>
  );
}
