import axios from "axios"

export default class cvService{
    editCv(cv){
        return axios.post("http://localhost:8080/api/cvs/addAndEdit",cv);
    }
}