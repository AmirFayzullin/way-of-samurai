import genID from "./gedID";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    profile: null
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

        default:
            return state;
    }
};

export default profileReducer;


export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});