import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Action-Types/staffActionType"
import { combineReducers } from "redux"

const signupState = {
    success: false,
    error: "",
}

const loginState = {
    success: false,
    error: "",
    staff: {}
}

const signupReducer = (state = signupState, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                success: true,
                error: "",
            };

        case SIGNUP_FAIL:
            return {
                ...state,
                success: false,
                error: action.error,
            };

        default:
            return state;
    }
}

const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                error: "",
                staff: action.staff,
            };

        case LOGIN_FAIL:
            return {
                ...state,
                success: false,
                error: action.error,
                staff: {}
            };

        default:
            return state;
    }
}

const staffReducer = combineReducers ({
    signup: signupReducer,
    login: loginReducer
})

export default staffReducer