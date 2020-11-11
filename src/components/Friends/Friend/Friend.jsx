import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friendCard}>
            <div className={s.avatar}>
                <img src={props.state.avatarURL} alt=""/>
            </div>
            <p>{props.state.name}</p>
        </div>
    )
};

export default Friend;