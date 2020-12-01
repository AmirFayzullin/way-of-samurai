import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(d => <Post message={d.message} key={d.id} likesCount={d.likesCount}/>);
    let newPostText = props.newPostText;

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;