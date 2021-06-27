import React, { useEffect, useState } from "react";
import "../css/jobSeekerProfile.css";
import { Alert, Col } from "reactstrap";
import { useParams } from "react-router";
import JobSeekerService from "../services/jobSeekerService";
import { useSelector } from "react-redux";
import { EMPLOYER } from "../constant/userTypes";
export default function JobSeekerProfile() {
  const [jobSeekerProfile, setJobSeekerProfile] = useState({});
  const [cv, setCv] = useState({});
  const user = useSelector((state) => state.user);

  let { id } = useParams();

  useEffect(() => {
    let jobSeekerSer = new JobSeekerService();
    if (user.user !== null) {


      if (id === "my") {
        setJobSeekerProfile(user.user);
        jobSeekerSer
          .getCvByIdForItSelf(user.user.id)
          .then((result) => setCv(result.data.data));
      } else {
        if (user.userType === EMPLOYER) {
          jobSeekerSer.getCvByIdForEmployers(id, user.user.id).then((result) => {
            setCv(result.data.data);
            setJobSeekerProfile(result.data.data.jobSeeker);
          });
        }
      }
    }
  }, [id, user]);

  return (
    <div className="profileContainer">
      <Col xs="12">
        <div className="profile">
          <div className="profileWall">
            <img
              className="profilPhoto"
              src="https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png"
              alt="profilPhoto"
            />
          </div>
          <div className="basicInfos">
            <h1>
              {jobSeekerProfile?.firstName} {jobSeekerProfile?.lastName}
            </h1>
            <h6>{jobSeekerProfile?.email}</h6>
            <h6>{jobSeekerProfile?.phone}</h6>
          </div>
          <div className="cvContainer">
            <Alert color="dark">
              <h1>Hakkında</h1>
              <p>{cv?.summary}</p>
            </Alert>
            <Alert>
              <h1>Education</h1>
              {cv?.educations?.map((education) => (
                <p key={education.id}>{education?.schoolName}</p>
              ))}</Alert>
            <Alert>
              <h1>Experience</h1>
              {cv?.experiences?.map((experience) => (
                <p key={experience.id}>{experience?.companyName}</p>
              ))}
            </Alert>
            <Alert>
              <h1>Bilinen Diller</h1>
              {cv?.cvLanguages?.map((cvLanguage) => (
                <p key={cvLanguage.id}> {cvLanguage?.languageName}</p>
              ))}
            </Alert>
          </div>
        </div>
      </Col>
    </div>
  );
}
