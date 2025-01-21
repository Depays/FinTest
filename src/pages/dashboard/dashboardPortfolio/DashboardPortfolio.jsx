import React from 'react'
import './DashboardPortfolio.css'

import icons from '../../../resources/icons'

export default function DashboardPortfolio() {
    return (
        <div className='dashboardPortfolioContainer'>
            <div className="headerData">
                <p className='operationStoreHeader'>Portfolio</p>
            </div>
            <div className='portfolioData'>
                <img src={icons.iconNotOperations} alt="empty-operaions" />
                <p className='comment'>No account details yet</p>
            </div>
        </div>
    )
}
