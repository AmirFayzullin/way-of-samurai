import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import User from "./User/User";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount % 30);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) pages.push(i);

        return (
            <div className={s.users}>
                <div className={s.pagesNumbersWrapper}>
                    {pages.map(p => <span className={`${s.pageNumber} ${p === this.props.currentPage ? s.selected : ""}`}
                                                    key={p}
                                                    onClick={() => this.onPageChanged(p)}
                                              >
                                                  {p}
                                              </span>)
                    }
                </div>
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