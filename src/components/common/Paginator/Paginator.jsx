import React, {useState} from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    const [currentPortion, setCurrentPortion] = useState(Math.ceil(currentPage / portionSize));

    const decCurrentPortion = () => setCurrentPortion(currentPortion - 1);
    const incCurrentPortion = () => setCurrentPortion(currentPortion + 1);

    const portionsCount = Math.ceil(pagesCount / portionSize);
    const leftPortionEdge = (currentPortion - 1) * portionSize;
    const rightPortionEdge = currentPortion * portionSize - 1;

    return (
        <div className={s.wrapper}>
            <button onClick={decCurrentPortion}
                    disabled={currentPortion <= 1}
                    className={`${s.btn} ${currentPortion > 1 ? "" : s.hidden}`}
            >
                Prev
            </button>
            <div className={s.pagesNumbersWrapper}>
                {
                    pages.filter((item, index) => index >= leftPortionEdge && index <= rightPortionEdge)
                        .map(p => {
                            return <span className={`${s.pageNumber} ${s.btn} ${p === currentPage ? s.selected : ""}`}
                                         key={p}
                                         onClick={() => onPageChanged(p)}>
                                    {p}
                                </span>
                        })
                }
            </div>
            <button onClick={incCurrentPortion}
                    disabled={currentPortion >= portionsCount }
                    className={`${s.btn} ${currentPortion < portionsCount ? "" : s.hidden}`}
            >
                Next
            </button>
        </div>
    )
};

export default Paginator;