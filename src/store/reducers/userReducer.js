
import { LOG_OUT, SIGN_IN } from "../actions/userActions";
import {user} from "../initialState/user"

const initialState={
    user
}

export default function userReducer(state=initialState,{actionType,payload}){
    switch (actionType) {
        case SIGN_IN:
            return [...state,payload];
        case LOG_OUT:
            return state.user=null;
            
        default:
            return state;
    }
}


