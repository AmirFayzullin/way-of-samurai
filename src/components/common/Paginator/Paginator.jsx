import React from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div className={s.pagesNumbersWrapper}>
            {
                pages.map(p => {
                    return <span className={`${s.pageNumber} ${p === currentPage ? s.selected : ""}`}
                                 key={p}
                                 onClick={() => onPageChanged(p)}>
                                    {p}
                                </span>
                })
            }
        </div>
    )
};

export default Paginator;