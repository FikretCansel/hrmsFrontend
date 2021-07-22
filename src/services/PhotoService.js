import axios from "axios";

export default class PhotoService{

    uploadJobSeekerPhoto(userId,photo){
        return axios.post(`http://localhost:8080/api/jobSeekers/uploadProfilePhoto?userId=${userId}`,photo);
    }

}




