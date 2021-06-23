import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';
const SET_IS_FETCHING_PROFILE = 'SET-IS-FETCHING-PROFILE';
const CLEAR_AUTH_DATA = 'CLEAR-AUTH-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetchingProfile: false,
    profileData: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            };
        case SET_IS_FETCHING_PROFILE:
            return {
                ...state,
                isFetchingProfile: action.isFetching,
            };
        case CLEAR_AUTH_DATA:
            return initialState;
        default:
            return state;
    }
};

export const clearAuthData = () => ({type: CLEAR_AUTH_DATA});
export const setAuthUserData = (userId, email, login, isAuth = true) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}});
export const setAuthUserProfile = (profileData) => ({type: SET_AUTH_USER_PROFILE, profileData});
export const setIsFetchingProfile = (isFetching) => ({type: SET_IS_FETCHING_PROFILE, isFetching});

export const authMe = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;

                dispatch(setIsFetchingProfile(true));
                dispatch(setAuthUserData(id, email, login));

                profileAPI.getProfile(id)
                    .then(data => {
                        dispatch(setAuthUserProfile(data));
                        dispatch(setIsFetchingProfile(false));
                    });
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else if (data.messages.length){
                dispatch(stopSubmit("login", {_error: data.messages.join(', ')}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0)
                dispatch(clearAuthData());
        });
};

export default authReducer;

