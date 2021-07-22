import React, { useEffect, useState } from "react";
import "../css/jobSeekerProfile.css";
import { Col } from "reactstrap";
import { useParams } from "react-router";
import JobSeekerService from "../services/jobSeekerService";
import { useSelector } from "react-redux";
import { EMPLOYER } from "../constant/userTypes";
import CvDetails from "../layouts/Cv/CvDetails";
import { Button } from "@material-ui/core";
import CvAdd from "../layouts/Cv/CvAdd";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import UploadPhoto from "../layouts/Cv/UploadPhoto";

const useStyles = makeStyles((theme) => ({
  profileAvatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    marginTop:"120px"
  },
}));

export default function JobSeekerProfile() {
  const [jobSeekerProfile, setJobSeekerProfile] = useState({});
  const [cv, setCv] = useState({});
  const user = useSelector((state) => state.user);
  const [cvAddIsOpen, setCvAddIsOpen] = useState(false);
  const [uploadPhotoIsOpen, setUploadPhotoIsOpen] = useState(false);
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    let jobSeekerSer = new JobSeekerService();
    if (user.user !== null) {
      if (id === "my") {
        setJobSeekerProfile(user.user);
        jobSeekerSer
          .getCvByIdForItSelf(user.user.id)
          .then((result) => {setCv(result.data.data);});
      } else {
        if (user.userType === EMPLOYER) {
          jobSeekerSer.getCvByIdForEmployers(id, user.user.id).then((result) => {
            setCv(result.data.data);
            setJobSeekerProfile(result?.data?.data?.jobSeeker);
          });
        }
      }
    }
  }, [id, user]);


  const handleCvAddClose=()=>{
    setCvAddIsOpen(false);
  }
  const handleCvAddOpen=()=>{
    setCvAddIsOpen(true);
  }
  const handleUploadPhotoOpen=()=>{
    setUploadPhotoIsOpen(true);
  }
  const handleUploadPhotoClose=()=>{
    setUploadPhotoIsOpen(false);
  }

  return (
    <div className="profileContainer">
      <Col xs="12">
        <div className="profile">
          <div className="profileWall">
          <Avatar alt="Remy Sharp" src={cv?.jobSeeker?.photoUrl} className={classes.profileAvatar} />
          </div>
          <div className="basicInfos">
            <h1>
              {jobSeekerProfile?.firstName} {jobSeekerProfile?.lastName}
            </h1>
            <h6>{jobSeekerProfile?.email}</h6>
            <h6>{jobSeekerProfile?.phone}</h6>
            <Button onClick={handleCvAddOpen}>Profili Düzenle</Button>
            <Button onClick={handleUploadPhotoOpen}>Fotograf Düzenle</Button>
          </div>
          {
            cv!==null && <CvDetails cv={cv}/>
          }

          <CvAdd cvAddIsOpen={cvAddIsOpen} handleCvAddClose={handleCvAddClose}></CvAdd>
          <UploadPhoto uploadPhotoIsOpen={uploadPhotoIsOpen} handleUploadPhotoClose={handleUploadPhotoClose}/>
        </div>
      </Col>
    </div>
  );
}