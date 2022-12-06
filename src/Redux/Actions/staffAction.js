import axios from 'axios';
import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../Action-Types/staffActionType';


export const signup = (newStaff) => async (dispatch) => {
 axios
 .post("http://localhost:9000/staffs/", newStaff)
 .then((response) => {
     if(response.data.success) {
         dispatch ({
             tpye: SIGNUP_SUCCESS,
         })
     } else {
         dispatch ({
             type: SIGNUP_FAIL,
             error: "An error occurred!",
         })
     }
 })
 .catch ((error) => {
     console.log(error);
 })  
}

export const login = (staff) => async (dispatch) => {
    axios
    .post("http://localhost:9000/staffs/login", staff)
    .then ((response) => {
        if(response.data.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                staff: response.data.staff,
            })
        } else {
            dispatch({
                type: LOGIN_FAIL,
                error: response.data.message
            })
        }
    })
    .catch ((error) => {
        console.log(error);
    })
}