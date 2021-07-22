import React, { useState } from "react";
import { useFormik } from "formik";
import { Form } from "reactstrap";
import { Button, Grid } from "@material-ui/core";
import * as yup from "yup";
import VerificationService from "../services/verificationService";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import HrmsResultAlert from "../utilities/customFormControls/HrmsResultAlert";

export default function EmailVerification() {
    const user = useSelector((state) => state?.user.user);
    const [processResult, setProcessResult] = useState(null);
    const [codeFieldIsDisable, setCodeFieldIsDisable] = useState(false);


    const sendCode = () => {

        //console.log(user)
        const userId = user?.id;
        if(user!==undefined && userId!==null){
            let verificationSer = new VerificationService();
        verificationSer
            .sendCodeToMail(userId)
            .then((result) => setProcessResult(result.data))
            .catch((err) => console.log(err));
            setCodeFieldIsDisable(true);
        }
        else{
            setProcessResult({success:false,message:"Lütfen giriş Yapınız"});
        }
        
    };

    const verifyEmail=(code)=>{
        const userId = user?.id;
        let verificationSer = new VerificationService();
        verificationSer
            .verifyEmail(userId,code)
            .then((result) => setProcessResult(result.data))
            .catch((err) => console.log(err));
            setCodeFieldIsDisable(true);
    }

    const schema = yup.object({
        code: yup.number("Sayı giriniz").max(9999, "4 haneli olmalıdır").min(1000,"4 haneli olmalıdır").required(),
    });

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            code: "",
        },
        onSubmit: (values) => {
            verifyEmail(values.code);
        },
    });

    return (
        <div>
        <Form onSubmit={formik.handleSubmit}>
            <Grid container direction="row">
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        id="code"
                        name="code"
                        label="Mailinize gönderilen kodu giriniz"
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        error={formik.touched.code && Boolean(formik.errors.code)}
                        helperText={formik.touched.code && formik.errors.code}
                        variant="filled"
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button disabled={codeFieldIsDisable} variant="contained" color="primary" onClick={() => sendCode()}>
                        Kodu Gönder</Button></Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" >Kodu Onayla</Button>
        </Form>
        <HrmsResultAlert processResult={processResult} />
        </div>
    );
}
