import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let state = props.state.profilePage;

    let postsElements = state.posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.addPost();
    };

    let onPostChange = () => {
        props.store.updateNewPostText(newPostElement.current.value);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={state.newPostText}
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