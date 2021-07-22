import React from "react";
import { Alert, Col } from "reactstrap";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import HrmsCvAppBar from '../../utilities/HrmsCvAppBar';

export default function CvDetails({ cv }) {
  return (
    <div className="cvContainer">
      <Alert color="dark">
      <HrmsCvAppBar AppBarTitle="Hakkında"/>
        <br/>
        <br/>
        <p>{cv?.summary}</p>
      </Alert>
      <Alert>
        <HrmsCvAppBar AppBarTitle="Egitim Bilgileri"/>
        {cv?.cvEducations?.map((education) => (
          <div key={education.id}>
            <hr/>
            <p>Okul Adı : {education?.schoolName}</p>
            <p>Program Adı : {education?.programName}</p>
            <p>Başlangıç Tarihi : {education?.startDate}</p>
            <p>Bitiş Tarihi : {education?.graduationDate}</p>
            
          </div>
        ))}
      </Alert>
      <Alert>
      <HrmsCvAppBar AppBarTitle="Tecrübe Bilgileri"/>
        {cv?.cvExperiences?.map((experience) => (
          <div key={experience.id}>
            <hr/>
            <p>Şirket : {experience?.companyName}</p>
            <p>Başlama Tarihi: {experience?.startDate}</p>
            <p>Bitiş Tarihi : {experience?.departureDate}</p>
          </div>
        ))}
      </Alert>
      <Alert>
        <HrmsCvAppBar AppBarTitle="Bilinen Diller"/>
        {cv?.cvLanguages?.map((cvLanguage) => (
          <div key={cvLanguage.id}>
            <hr/>
            <p> {cvLanguage?.languageName}</p>
            <Typography component="legend">Dil Seviyesi</Typography>
            <Rating
              name="read-only"
              value={cvLanguage?.level}
              readOnly 
            />
            <hr/>
          </div>
        ))}
      </Alert>
    </div>
  );
}
