import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(d => <Post message={d.message} likesCount={d.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        });
    };

    let onPostChange = () => {
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newPostText: newPostElement.current.value
        });
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