import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import User from "./User/User";

const Users = (props) => {

    if (!props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div className={s.users}>
            {props.users.map(userData => <User userData={userData}
                                                         follow={(userId) => props.follow(userId)}
                                                         unfollow={(userId) => props.unfollow(userId)}
                                                         key={userData.id}
                                                  />
            )}
        </div>
    )
};

export default Users;