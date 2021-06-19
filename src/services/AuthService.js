import axios from "axios";


export class AuthService{

    employerLogin(email,password){
        return axios.post("http://localhost:8080/api/employers/login",{email,password});
    }
    jobSeekerLogin(email,password){
        return axios.post("http://localhost:8080/api/jobSeekers/login",{email,password});
    }
    employerRegister(email,password,companyName){//blabla
        return axios.post("http://localhost:8080/api/employers/register",{email,password,companyName});
    }
    jobSeekerRegister(email,password,firstName,lastName){
        return axios.post("http://localhost:8080/api/jobSeekers/login",{email,password,firstName,lastName});
    }


}