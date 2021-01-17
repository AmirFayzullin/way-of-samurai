import genID from "./genID";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_PROFILE_FETCHING = 'TOGGLE-PROFILE-FETCHING';

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
    newPostText: "",
    profile: null,
    isFetchingProfile: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: genID(),
                message: state.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
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

        default:
            return state;
    }
};

export default profileReducer;


export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleProfileFetching = (isFetching) => ({type: TOGGLE_PROFILE_FETCHING, isFetching});

export const getProfile = (userId) => (dispatch) => {
    dispatch(toggleProfileFetching(true));

    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
            dispatch(toggleProfileFetching(false));
        });
};