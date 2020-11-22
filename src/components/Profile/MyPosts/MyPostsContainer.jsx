import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPostCreator());
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextCreator(text);
                        store.dispatch(action);
                    };

                    return (<MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.posts}
                             newPostText={state.newPostText}
                    />)
                }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;