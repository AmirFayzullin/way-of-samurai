import genID from "../utils/genID";
import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {parseError} from '../utils/errorParser';

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const TOGGLE_PROFILE_FETCHING = 'profile/TOGGLE-PROFILE-FETCHING';
const SET_STATUS = 'profile/SET-STATUS';
const SET_AVATAR_SUCCESS = 'profile/SET-AVATAR-SUCCESS';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hello! How are you?',
            likesCount: 16
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 12
        }
    ],
    profile: null,
    status: '',
    isFetchingProfile: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: genID(),
                message: action.post,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id),
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case TOGGLE_PROFILE_FETCHING:
            return {
                ...state,
                isFetchingProfile: action.isFetching
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_AVATAR_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        default:
            return state;
    }
};

export default profileReducer;


export const addPost = (post) => ({type: ADD_POST, post});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleProfileFetching = (isFetching) => ({type: TOGGLE_PROFILE_FETCHING, isFetching});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setAvatarSuccess = (photos) => ({type: SET_AVATAR_SUCCESS, photos});

export const requestProfile = (userId) => async (dispatch) => {
    dispatch(toggleProfileFetching(true));

    const data = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(data));
    dispatch(toggleProfileFetching(false));
};

export const requestStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data))
};

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) dispatch(setStatus(status));
};

export const savePhoto = (photoFile) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photoFile);

    if (data.resultCode === 0)
        dispatch(setAvatarSuccess(data.data.photos));
};

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const data = await profileAPI.saveProfile(profileData);

    if (data.resultCode === 0) {
        const userId = getState().auth.userId;
        return dispatch(requestProfile(userId));
    } else {
        const errors = data.messages.map(msg => parseError(msg.toLowerCase()));
        let errorsObj = errors[0];

        errors.forEach(error => {
            if ('contacts' in error) {
                errorsObj.contacts = {
                    ...errorsObj.contacts,
                    ...error.contacts
                }
            } else {
                errorsObj = {
                    ...errorsObj,
                    ...error
                }
            }
        });

        dispatch(stopSubmit('profile-data', errorsObj));
        return Promise.reject();
    }
};
