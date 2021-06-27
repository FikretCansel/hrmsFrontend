import React, { useEffect,useState } from "react";
import "../../css/companyProfile.css";
import { Col } from "reactstrap";
import EmployerService from "../../services/employerService";

export default function CompanyProfile({id}) {

    const [company, setCompany] = useState({})

  useEffect(() => {
    let EmployerSer=new EmployerService();



    EmployerSer.getByid(id).then((result)=>setCompany(result.data.data))
  }, 
  [id]);

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
            <h1>{company?.companyName}</h1>
            <h6>{company?.email}</h6>
            <h6>Phone :{company?.phone}</h6>
            <h6>WebSite :{company?.webSite}</h6>
          </div>
          
        </div>
      </Col>
    </div>
  );
}
