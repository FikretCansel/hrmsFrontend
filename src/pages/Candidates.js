import React, { useEffect, useState } from "react";
import EmployerService from "../services/employerService";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import HrmsResultAlert from "../utilities/customFormControls/HrmsResultAlert";
import { Link } from "react-router-dom";

export default function Candidates() {
  let { id } = useParams();

  const [candidates, setCandidates] = useState([]);
  const user = useSelector((state) => state.user);
  const [processResult, setProcessResult] = useState(null);
  useEffect(() => {
    getCandidates(id);
  }, [id]);

  const getCandidates = (jobAdvertisementId) => {
    let employerId = user?.user?.id;
    if (user.user !== null && user.user !== undefined) {
      let employerSer = new EmployerService();
      employerSer
        .getCandidates(jobAdvertisementId, employerId)
        .then((result) => {
          if (result.data.success) {
            setCandidates(result.data.data);
          } else {
            setProcessResult({ success: false, message: result.data.message });
          }
        });
    } else {
      setProcessResult({ success: false, message: "Giriş Yapınız" });
    }
  };

  return (
    <div>
      <HrmsResultAlert processResult={processResult} />
      {candidates.map((candidate) => (
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <Link to={`/profile/${candidate.jobSeeker.id}`}>
              {candidate.jobSeeker.firstName} {candidate.jobSeeker.lastName}
            </Link>
            {candidate.jobSeeker.email}


          </div>
        </div>
      ))}
    </div>
  );
}
