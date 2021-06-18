import axios from "axios";


export default class CandidateService{
    applyToJob(jobAdvertisementId,JobseekerId) {
        const candidate={
            jobAdvertisement:{
                id:jobAdvertisementId
            },
            jobSeeker:{
                id:JobseekerId
            }
        }
      return axios.post("http://localhost:8080/api/candidates/apply",candidate);  
    }
}