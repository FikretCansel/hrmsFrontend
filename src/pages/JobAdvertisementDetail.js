import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import jobAdvertisementService from "../services/jobAdvertisementService";
import { Button } from "reactstrap";
import { Alert, AlertTitle } from "@material-ui/lab";
import CandidateService from "../services/candidateService";
import { useSelector } from "react-redux";
import { JOBSEEKER } from "../constant/userTypes";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [details, setDetails] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer
      .getByid(id)
      .then((result) => setDetails(result.data.data));
  }, [id]);

  const user = useSelector(state => state.user)

  const applyToJob = () => {
    
    if(isApplyToJob){
      let candidateSer = new CandidateService();
      candidateSer
      .applyToJob(details.id, 2)
      .then((result) => setAlert(result.data.message));
    }

  };

  function isApplyToJob(){
    if(user.userType===JOBSEEKER){
      return true;
    }

    return false;
    
  }



  return (
    <div>
      ilan Detayları:
      <h6>{details.employer?.companyName}</h6>
      <h6>{details.employer?.email}</h6>
      <h6>{details.employer?.phone}</h6>
      <h6>{details.description}</h6>
      <h6>{details.lastApplyDate}</h6>
      <h6>{details.creationDate}</h6>
      <h6>{details.city?.cityName}</h6>
      <h6>{details.jobPosition?.name}</h6>
      <Button disabled={!isApplyToJob()} onClick={applyToJob}>Başvuruda Bulun</Button>
      {alert !== "" ? (
        <Alert severity="success">
          <AlertTitle>Başarılı</AlertTitle>
          {alert}
        </Alert>
      ) : null}
    </div>
  );
}
