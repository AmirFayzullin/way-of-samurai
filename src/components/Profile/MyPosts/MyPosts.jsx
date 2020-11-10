import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {
            message: 'Hello! How are you?',
            likesCount: 16
        },
        {
            message: 'It\'s my first post',
            likesCount: 12
        }
    ];

    let postsElements = posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;