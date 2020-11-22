import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = props.friends.map(d => <Friend state={d}/>);

    return (
        <div className={s.friendsBar}>
            <p className={s.friendsBarTitle}>Friends</p>

            <div className={s.friends}>
                {friends}
            </div>
        </div>
    )
};

export default Friends;