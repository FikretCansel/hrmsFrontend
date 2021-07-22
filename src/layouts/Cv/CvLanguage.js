import React from "react";
import * as Yup from "yup";
import { FieldArray, Form, Formik } from "formik";
import HrmsTextField from "../../utilities/customFormControls/HrmsTextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const validationSchema = Yup.object({
    languages: Yup.array().of(
        Yup.object().shape({
            languageName: Yup.string().required("Dil adı gerekli"),
            level: Yup.number().required("Seviye gerekli"),
        })
    ),
});
var initialValues = {
    languages: [
        {
            languageName: "",
            level: 1,
        },
    ],
};
export default function CvLanguage({ BackToHomeMenuButton, setLanguages }) {
    const handleSubmit = (values) => {
        setLanguages(values);
    }


    return (
        <div>
            <br />
            <br />
            <h4 style={{ textAlign: "center" }}>YabancıDil Bilgileri</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
                render={({ values }) => (
                    <Form>
                        <FieldArray
                            name="languages"
                            render={(arrayHelpers) => {
                                const languages = values.languages;
                                return (
                                    <div>
                                        {languages && languages.length > 0
                                            ? languages.map((user, index) => (
                                                <div key={index}>
                                                    <Grid container>
                                                        <Grid item xs={2} />
                                                        <HrmsTextField
                                                            gridSize={3}
                                                            fieldName={`languages.${index}.languageName`}
                                                            label="Dil Adı"
                                                        />
                                                        <Grid item xs={1} />
                                                        <HrmsTextField
                                                            gridSize={3}
                                                            fieldName={`languages.${index}.level`}
                                                            label="Dil Adı"
                                                        />
                                                        <Grid item xs={1} />
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
                                        <Grid
                                            style={{ marginTop: "50px" }}
                                            container
                                            justify="center"
                                        >
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        languageName: "",
                                                        level: 1,
                                                    })
                                                } // insert an empty string at a position
                                            >
                                                +
                                            </Button>
                                        </Grid>
                                        <br />
                                        <br />
                                        <br />

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            style={{ marginLeft: "50px" }}
                                        >
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
