import React from 'react';
import './Pagination.css';
import {PaginationProps} from "../../common/types";

const Pagination: React.FC<PaginationProps> = ({pageActive, pagesTotal, setPage}) => {
    const classArrowLeft = (pageActive === 1) ? '' : 'arrow__active';
    const classArrowRight = (pageActive === pagesTotal) ? '' : 'arrow__active';

    const setPageActive = (shift: number) => setPage(pageActive + shift);

    return (
        <div className="pagination">
            <div className={`pagination__item arrow disabled ${classArrowLeft}`}
                 onClick={() => setPageActive(-1)}>{'\u2190'}</div>
            <div className="pagination__item">{pageActive}</div>
            <div className={`pagination__item arrow ${classArrowRight}`}
                 onClick={() => setPageActive(1)}>{'\u2192'}</div>
        </div>
    )
};

export default Pagination;