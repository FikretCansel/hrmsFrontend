import axios from "axios";


export default class CandidateService{
    applyToJob(jobAdvertisementId,JobseekerId,employerId) {
        const candidate={
            jobAdvertisement:{
                id:jobAdvertisementId,
                employer:{
                    id:employerId
                }
            },
            jobSeeker:{
                id:JobseekerId
            }
        }
      return axios.post("http://localhost:8080/api/candidates/apply",candidate);  
    }
}