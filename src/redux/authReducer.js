const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_IS_FETCHING_PROFILE = 'SET-IS-FETCHING-PROFILE';

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
                isAuth: true
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            };
        case SET_IS_FETCHING_PROFILE:
            return {
                ...state,
                isFetchingProfile: action.isFetching,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}});
export const setAuthUserProfile = (profileData) => ({type: SET_USER_PROFILE, profileData});
export const setIsFetchingProfile = (isFetching) => ({type: SET_IS_FETCHING_PROFILE, isFetching});

export default authReducer;

