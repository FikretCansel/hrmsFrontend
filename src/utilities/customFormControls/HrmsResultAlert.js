import React from 'react'
import { Alert, AlertTitle } from "@material-ui/lab";

export default function HrmsResultAlert({processResult}) {
    return (
        <div>
            {processResult !== null ? (
                <Alert style={{ marginTop: "20px" }} severity={processResult.success ? "success" : "error"}>
                    <AlertTitle>{processResult.success ? "Başarılı" : "Hata"}</AlertTitle>
                    {processResult.message}
                </Alert>
            ) : null}
        </div>
    )
}
