import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let newPostMessage = newPostElement.current.value;
        props.dataManager.addPost(newPostMessage);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
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