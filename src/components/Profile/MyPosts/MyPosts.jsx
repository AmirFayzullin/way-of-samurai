import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/state";

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let action = updateNewPostTextActionCreator(newPostElement.current.value);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.state.newPostText}
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