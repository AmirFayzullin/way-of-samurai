import genID from "./gedID";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: genID(),
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.unshift(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;


export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
});