import axios from "axios"

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getActives");
    }
    getByid(id){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getById?id=${id}`);
    }
}