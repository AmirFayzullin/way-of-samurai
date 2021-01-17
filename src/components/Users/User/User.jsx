import React from 'react';
import s from "./User.module.css";
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";

const User = (props) => {

    const follow = (userId) => props.follow(userId);

    const unfollow = (userId) => props.unfollow(userId);

    return (
        <div className={s.user}>

            <span className={s.leftBar}>
                <img className={s.avatar} src={props.userData.photos.small || userPhoto} alt="ava"/>

                {props.userData.followed ?
                    <button disabled={props.isFollowingInProgress}
                            className={`${s.button} ${s.unfollow}`}
                            onClick={() => unfollow(props.userData.id)}
                    >
                        Unfollow
                    </button>
                    :
                    <button disabled={props.isFollowingInProgress}
                            className={`${s.button} ${s.follow}`}
                            onClick={() => follow(props.userData.id)}
                    >
                        Follow
                    </button>
                }
            </span>

            <span className={s.rightBar}>
                <span className={s.nameStat}>
                    <NavLink to={`profile/${props.userData.id}`}
                             className={s.name}
                    >
                        <div>{props.userData.name}</div>
                    </NavLink>
                    <div className={s.status}>{props.userData.status}</div>
                </span>

                <span className={s.location}>
                    <div>{"props.userData.location.country"}</div>
                    <div>{"props.userData.location.city"}</div>
                </span>
            </span>
        </div>
    )
};

export default User;