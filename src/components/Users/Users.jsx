import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage,
                 onPageChanged, follow, unfollow,
                 users, followingInProgressUsersIds}) => {

    return (
        <div className={s.users}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}
            />
            {
                users.map(userData => <User userData={userData}
                                            follow={follow}
                                            unfollow={unfollow}
                                            key={userData.id}
                                            isFollowingInProgress={followingInProgressUsersIds.some(id => id === userData.id)}
                                        />)
            }
        </div>
    )
};

export default Users;