import { mYFirebase } from "../firebase/firebase";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; 
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"; 
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_SUCCESS = "VERIFY_SUCCESS"; 
export const VERIFY_FAILURE = "VERIFY_FAILURE";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};