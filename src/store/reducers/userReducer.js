
import { LOG_OUT, SIGN_IN } from "../actions/userActions";
import {user} from "../initialState/user"

const initialState={
    user
}

export default function userReducer(state=initialState,{type,payload}){
    switch (type) {
        case SIGN_IN:
            return payload;
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
}


