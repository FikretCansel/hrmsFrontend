import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import jobAdvertisementService from "../services/jobAdvertisementService";
import { Alert } from "@material-ui/lab";
import CandidateService from "../services/candidateService";
import { useSelector } from "react-redux";
import { JOBSEEKER } from "../constant/userTypes";
import { Link } from "react-router-dom";
import "../css/jobAdvertisementDetail.css";
import { Row, Col } from "reactstrap";
import { Button } from "@material-ui/core";
import HrmsResultAlert from "../utilities/customFormControls/HrmsResultAlert";


export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [details, setDetails] = useState([]);
  const [processResult, setProcessResult] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer
      .getByid(id)
      .then((result) => setDetails(result.data.data));
  }, [id]);

  const applyToJob = () => {
    if (isApplyToJob) {
      let candidateSer = new CandidateService();
      candidateSer
        .applyToJob(details.id, user?.user?.id,details.employer.id)
        .then((result) => setProcessResult(result.data));
    }
  };

  function isApplyToJob() {
    if (user.userType === JOBSEEKER) {
      return true;
    }
    return false;
  }

  return (
    <div className="jobAdvertisementDetails">
      ilan Detayları:
      <Alert color="success" className="companyInfos">
        <Row>
          <Col>
            <p>Şirket Adı</p>
            <Link to={`/company/${details.employer?.id}`}>
              <h6>{details.employer?.companyName}</h6>
            </Link>
          </Col>
          <Col>
            <p>Email</p>
            <h6>{details.employer?.email}</h6>
          </Col>
          <Col>
          <p>Telefon</p>
            <h6>{details.employer?.phone}</h6>
          </Col>
          <Col>
          <Button variant="contained" color="secondary" disabled={!isApplyToJob()} onClick={applyToJob}>
        Başvuruda Bulun
      </Button></Col>
        </Row>
        <Row>
        <HrmsResultAlert processResult={processResult}/>
        </Row>
      </Alert>
      <h5>Pozisyon-yer</h5>
      <h4>{details.jobPosition?.name} : {details.city?.cityName}</h4>
      <h6>Son Başvuru</h6>
      <h5>{details.lastApplyDate}</h5>
      <h6>Ilan Oluşturma Tarihi</h6>
      <h5>{details.creationDate}</h5>
      
      
      

      <h5>Iş Detayları</h5>
      <p>{details.description}</p>
      
    </div>
  );
}
