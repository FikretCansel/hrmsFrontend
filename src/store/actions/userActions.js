export const SIGN_IN="SIGN_IN";
export const LOG_OUT="LOG_OUT";
export function signIn(auth){
    return {
        type:SIGN_IN,
        payload:auth
    }
}
export function logOut(){
    return {
        type: LOG_OUT
    }
}
