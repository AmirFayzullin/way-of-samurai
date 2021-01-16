import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div className={s.users}>
            <div className={s.pagesNumbersWrapper}>
                {
                    pages.map(p => {
                        return <span className={`${s.pageNumber} ${p === props.currentPage ? s.selected : ""}`}
                                      key={p}
                                      onClick={() => props.onPageChanged(p)}>
                                    {p}
                                </span>
                    })
                }
            </div>
            {
                props.users.map(userData => <User userData={userData}
                                                            follow={(userId) => props.follow(userId)}
                                                            unfollow={(userId) => props.unfollow(userId)}
                                                            key={userData.id}
                                                            toggleFollowingInProgress={props.toggleFollowingInProgress}
                                                            isFollowingInProgress={props.followingInProgressUsersIds.some(id => id === userData.id)}
                                                        />)
            }
        </div>
    )
};

export default Users;