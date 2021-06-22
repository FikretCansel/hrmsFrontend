import axios from "axios"

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getActives");
    }
    getByid(id){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getById?id=${id}`);
    }
    add(jobAdvertisementData){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisementData);
    }
    getByEmployerId(id){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByEmployerId?id=${id}`);
    }
}