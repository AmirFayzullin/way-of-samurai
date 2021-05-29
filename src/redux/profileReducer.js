import genID from "./genID";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_PROFILE_FETCHING = 'TOGGLE-PROFILE-FETCHING';
const SET_STATUS = 'SET-STATUS';

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
        default:
            return state;
    }
};

export default profileReducer;


export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleProfileFetching = (isFetching) => ({type: TOGGLE_PROFILE_FETCHING, isFetching});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    dispatch(toggleProfileFetching(true));

    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleProfileFetching(false));
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((data) => {
            dispatch(setStatus(data))
        });
};

export const updateStatus  = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
};