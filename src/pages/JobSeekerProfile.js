import React,{useEffect} from "react";
import "../css/jobSeekerProfile.css";
import { Alert, Col } from "reactstrap";
export default function JobSeekerProfile() {

  // const [, set] = useState(initialState)

  // useEffect(() => {
    
  // }, [id])



  return (
    <div className="profileContainer">
      <Col xs="8">
        <div className="profile">
          <div className="profileWall">
            <img
              className="profilPhoto"
              src="https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" alt="profilPhoto"
            />
          </div>
          <div className="basicInfos">
            <h1>Fikret Cansel</h1>
            <h6>fikret_312@hotmail.com</h6>
            <h6>Phone : 05510616913</h6>
          </div>
          <div className="cvContainer">
            <Alert color="dark">
              <h1>Cv</h1>
              <h6>sdsdssddssd</h6>
              <h1>Education</h1>
              <p>Pamukkale Üniversitesi - 2019-2024</p>
              <h1>Experience</h1>
              <p>Sanlab:Stajsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
            </Alert>
          </div>
        </div>
      </Col>
    </div>
  );
}
