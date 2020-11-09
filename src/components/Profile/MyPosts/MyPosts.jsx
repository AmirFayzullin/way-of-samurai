import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post
                    message='Hello! How are you?'
                    likesCount='16'
                />
                <Post
                    message="It's my first post"
                    likesCount='20'
                />
            </div>
        </div>
    );
};

export default MyPosts;