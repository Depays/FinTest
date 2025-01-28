import React, { useState } from 'react';
import './Dashboard.css';

import icons from '../../resources/icons';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import OperationStatistic from './operationStatistic/OperationStatistic';
import OperationStore from './operationStore/OperationStore';
import DashboardPortfolio from './dashboardPortfolio/DashboardPortfolio';
import TeamBalance from './teamBalance/TeamBalance';
import CustomChart from '../../components/CustomChart/CustomChart';

export default function Dashboard() {
  const [currentContent, setCurrentContent] = useState('default');
  const [activePage, setActivePage] = useState(1);
  const totalPages = 7;

  const handleChangeContent = (content) => {
    setCurrentContent(content);
  };

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

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="containerDashboardMain">
      <div className='generalBlocks'>
        <SideBar />
        <div className='firstContentBlock'>
          <Header name={currentContent === 'default' ? 'DASHBOARD' : 'TRANSACTION HISTORY'} isUser={true} />
          <div className='analyticsDataBlock'>
            {currentContent === 'default' ? (
              <>
                <div className="horizontalBlocks">
                  <OperationStatistic changeContent={handleChangeContent} />
                  <TeamBalance />
                  <CustomChart />
                </div>
                <div className='storesBlock'>
                  <OperationStore />
                  <DashboardPortfolio />
                </div>
              </>
            ) : (
              <div className="operationsPage">
                <div className="columnOperationsBox">
                  <div className="leftColumnsData">
                    <p className='columnText'>Ticker</p>
                  </div>
                  <div className="rightColumnsData">
                    <p className='columnText right'>Date</p>
                    <p className='columnText right'>Sum</p>
                  </div>
                </div>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
