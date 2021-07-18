import React, {useState} from 'react';
import cn from 'classnames';
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
                    className={cn(s.btn, {[s.hidden]: currentPortion <= 1})}
            >
                Prev
            </button>
            <div className={s.pagesNumbersWrapper}>
                {
                    pages.filter((item, index) => index >= leftPortionEdge && index <= rightPortionEdge)
                        .map(p => {
                            return <span className={cn(s.pageNumber, s.btn, {[s.selected]: p === currentPage})}
                                         key={p}
                                         onClick={() => onPageChanged(p)}>
                                    {p}
                                </span>
                        })
                }
            </div>
            <button onClick={incCurrentPortion}
                    disabled={currentPortion >= portionsCount }
                    className={cn(s.btn, {[s.hidden]: currentPortion >= portionsCount})}
            >
                Next
            </button>
        </div>
    )
};

export default Paginator;