import React from 'react';
import s from "./User.module.css";
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";

const User = ({follow, unfollow, userData, isFollowingInProgress}) => {

    return (
        <div className={s.user}>

            <span className={s.leftBar}>
                <img className={s.avatar} src={userData.photos.small || userPhoto} alt="ava"/>

                {userData.followed ?
                    <button disabled={isFollowingInProgress}
                            className={`${s.button} ${s.unfollow}`}
                            onClick={() => unfollow(userData.id)}
                    >
                        Unfollow
                    </button>
                    :
                    <button disabled={isFollowingInProgress}
                            className={`${s.button} ${s.follow}`}
                            onClick={() => follow(userData.id)}
                    >
                        Follow
                    </button>
                }
            </span>

            <span className={s.rightBar}>
                <span className={s.nameStat}>
                    <NavLink to={`profile/${userData.id}`}
                             className={s.name}
                    >
                        <div>{userData.name}</div>
                    </NavLink>
                    <div className={s.status}>{userData.status}</div>
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