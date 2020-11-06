import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.toiimg.com/photo/72975551.cms" alt="avatar"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;