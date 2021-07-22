import axios from "axios";


export class AuthService{

    employerLogin(email,password){
        return axios.post("http://localhost:8080/api/employers/login",{email,password});
    }
    jobSeekerLogin(email,password){
        return axios.post("http://localhost:8080/api/jobSeekers/login",{email,password});
    }
    employerRegister(values){//blabla
        return axios.post("http://localhost:8080/api/employers/register",values);
    }
    jobSeekerRegister(values){
        return axios.post("http://localhost:8080/api/jobSeekers/register",values);
    }
}