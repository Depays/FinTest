import React from 'react'
import './Dashboard.css'

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import OperationStatistic from './operationStatistic/OperationStatistic';
import OperationStore from './operationStore/OperationStore';
import DashboardPortfolio from './dashboardPortfolio/DashboardPortfolio';


export default function Dashboard() {
  return (
    <div className="containerDashboardMain">
      <div className='generalBlocks'>
        <SideBar />
        <div className='firstContentBlock'>
          <Header name={'DASHBOARD'} isUser={true} />
          <div className='analyticsDataBlock'>
            <div className="horizontalBlocks">
              <OperationStatistic />
              <OperationStatistic />
            </div>
            <div className='storesBlock'>
              <OperationStore />
              <DashboardPortfolio />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
