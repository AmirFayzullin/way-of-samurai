import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.state.posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);
    let newPostText = props.state.newPostText;

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let onPostChange = (e) => {
        let action = updateNewPostTextCreator(e.target.value);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;