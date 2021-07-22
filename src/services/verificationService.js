import axios from "axios"



export default class VerificationService{

    sendCodeToMail(userId){
        return axios.post(`http://localhost:8080/api/emailVerification/sendCodeToMail?userId=${userId}`);
    }
    verifyEmail(userId,code){
        return axios.post(`http://localhost:8080/api/emailVerification/verify`,{userId,code});
    }
}




