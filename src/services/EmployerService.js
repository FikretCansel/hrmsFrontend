import axios from "axios"

export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    getByid(id){
        return axios.get(`http://localhost:8080/api/employers/getById?id=${id}`);
    }

    getCandidates(jobAdvertisementId,employerId){
        return axios.get(`http://localhost:8080/api/candidates/getAllByJobAdvertisementEmployerId?employerId=${employerId}&jobAdvertisementId=${jobAdvertisementId}`)
    }
    
}