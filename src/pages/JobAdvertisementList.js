import React, { useEffect, useState } from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";
import { Link } from "react-router-dom";
import jobAdvertisementService from "../services/jobAdvertisementService";
import "../css/jobAdvertisementList.css";

export default function JobAdvertisementList() {                                                                                              
  
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementSer = new jobAdvertisementService();
    jobAdvertisementSer
      .getAll()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  // function getYYYYMMDD(d0) {
  //   const d = new Date(d0);
  //   return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
  //     .toISOString()
  //     .split("T")[0];
  // }

  

  return (
    <div className="jobAdvertisementList">
      {jobAdvertisements.map((jobAdvertisement) => (
        <Col key={jobAdvertisement.id} xs="6">
        <div className="jobAdvertisementItem">
          <Card body>
            <CardTitle tag="h5">
              {jobAdvertisement.companyName}
            </CardTitle>
            <CardText>
              {jobAdvertisement.positionName}
              {/* <h6>
                 Oluşturma tarihi:{getYYYYMMDD(jobAdvertisement.creationDate)}
              </h6> */}
            </CardText>
            <Link to={`jobAdvertisement/detail/${jobAdvertisement.id}`}>
              <Button>ilana git</Button>
            </Link>
          </Card>
        </div>
        </Col>
      ))}
    </div>
  );
}
