import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import User from "./User/User";

class Users extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div className={s.users}>
                {this.props.users.map(userData => <User userData={userData}
                                                   follow={(userId) => this.props.follow(userId)}
                                                   unfollow={(userId) => this.props.unfollow(userId)}
                                                   key={userData.id}
                    />
                )}
            </div>
        )
    }

}

export default Users;