import {authAPI, profileAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_AUTH_USER_PROFILE = 'auth/SET-AUTH-USER-PROFILE';
const SET_IS_FETCHING_PROFILE = 'auth/SET-IS-FETCHING-PROFILE';
const CLEAR_AUTH_DATA = 'auth/CLEAR-AUTH-DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetchingProfile: false,
    profileData: null,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
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
export const setAuthUserData = (userId, email, login, isAuth = true) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
});
export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    data: {captchaUrl}
});
export const setAuthUserProfile = (profileData) => ({type: SET_AUTH_USER_PROFILE, profileData});
export const setIsFetchingProfile = (isFetching) => ({type: SET_IS_FETCHING_PROFILE, isFetching});

export const authMe = () => async (dispatch) => {
    const authData = await authAPI.authMe();

    if (authData.resultCode === 0) {
        let {id, email, login} = authData.data;

        dispatch(setIsFetchingProfile(true));
        dispatch(setAuthUserData(id, email, login));

        const profileData = await profileAPI.getProfile(id);

        dispatch(setAuthUserProfile(profileData));
        dispatch(setIsFetchingProfile(false));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        dispatch(stopSubmit("login", {_error: data.messages.join(', ')}));
        dispatch(setCaptchaUrl(null));

        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
    }

};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(response.url));
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();

    if (data.resultCode === 0) dispatch(clearAuthData());
};

export default authReducer;

