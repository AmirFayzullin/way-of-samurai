import React from 'react';
import s from "./User.module.css";
import userPhoto from '../../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {

    const follow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            headers: {
                'API-KEY': '36e87e7e-c9a8-429e-8b4d-edd9007d0ca8',
            },
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   props.follow(userId);
               }
            });
    };

    const unfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            headers: {
                'API-KEY': '36e87e7e-c9a8-429e-8b4d-edd9007d0ca8',
            },
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(userId);
                }
            });
    };

    return (
        <div className={s.user}>

            <span className={s.leftBar}>
                <img className={s.avatar} src={props.userData.photos.small || userPhoto} alt="ava"/>

                {props.userData.followed ?
                    <button className={`${s.button} ${s.unfollow}`} onClick={() => unfollow(props.userData.id)}>Unfollow</button>
                    :
                    <button className={`${s.button} ${s.follow}`} onClick={() => follow(props.userData.id)}>Follow</button>
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