import React, { useState } from 'react'
import './Paginator.css'

import icons from '../../resources/icons';

export default function Paginator({ totalPages }) {
    const [activePage, setActivePage] = useState(1);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    // const [currentContent, setCurrentContent] = useState('default');

    // const handleChangeContent = (content) => {
    //     setCurrentContent(content);
    // };

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const handleNextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
        }
    };

    const handlePrevPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    return (
        <div className="paginator">
            <p className='paginatorText'>2 from 100</p>
            <div className="goPagination">
                <button
                    className='arrowPagesPagin'
                    onClick={handlePrevPage}
                    disabled={activePage === 1}
                >
                    <img src={icons.ArrowPaginator} alt="prev-page" />
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={`pageButtonPagination ${activePage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <p className='paginatorText arrows'>...</p>

                <button
                    className='arrowPagesPagin'
                    onClick={handleNextPage}
                    disabled={activePage === totalPages}
                >
                    <img src={icons.ArrowPaginator} alt="next-page" className='nextPagePagin' />
                </button>
            </div>
        </div>
    )
}
