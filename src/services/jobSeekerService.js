import axios from "axios"



export default class JobSeekerService{

   



    getJobSeekerProfileById(id){
        return axios.get(`http://localhost:8080/api/jobSeekers/getById?id=${id}`); 
    }
    getCvByIdForEmployers(jobSeekerId,employerId){
        return axios.get(`http://localhost:8080/api/cvs/getByJobSeekerIdForEmployers?employerId=${employerId}&jobSeekerId=${jobSeekerId}`);
    }
    getCvByIdForItSelf(jobSeekerId){
        return axios.get(`http://localhost:8080/api/cvs/getByJobSeekerIdForItSelf?jobSeekerId=${jobSeekerId}`);
    }



}




