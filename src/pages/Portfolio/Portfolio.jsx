import React, { useState } from 'react'
import './Portfolio.css'

import icons from '../../resources/icons'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import IndicatorPortfolio from '../../components/IndicatorPortfolio/IndicatorPortfolio'
import DateCalendar from '../../components/DateCalendar/DateCalendar'
import Table from '../../components/Table/Table'
import Profit from '../../components/Table/Profit/Profit'
import Ticker from '../../components/Table/Ticker/Ticker'
import Paginator from '../../components/Paginator/Paginator'

export default function Portfolio() {
    const [isActiveFilters, setIsActiveFilters] = useState(false);

    const handleActiveFilter = () => {
        setIsActiveFilters((prev) => (!prev))
    };

    const data = [
        {
            Ticker: <Ticker BigIcon={icons.iconTestTicker} header={'STEPN'} headerType={'NFT'} desc={'STEPN.COM'} money={6} />,
            Status: 'Open',
            Increase: '28.2%',
            Profit: <Profit price={854.94} />,
            PurchasePrice: '640.99 $',
            CurrentPrice: '3000.00 $',
            ClosingPrice: '3845.00 $',
            OpeningDate: '08.10.24',
            ClosingDate: '-'
        },
        {
            Ticker: <Ticker BigIcon={icons.iconTestTicker} header={'STEPN'} headerType={'NFT'} desc={'STEPN.COM'} money={6} />,
            Status: 'Open',
            Increase: '28.2%',
            Profit: <Profit price={854.94} />,
            PurchasePrice: '640.99 $',
            CurrentPrice: '3000.00 $',
            ClosingPrice: '3845.00 $',
            OpeningDate: '08.10.24',
            ClosingDate: '-'
        },
        {
            Ticker: <Ticker BigIcon={icons.iconTestTicker} header={'STEPN'} headerType={'NFT'} desc={'STEPN.COM'} money={6} />,
            Status: 'Open',
            Increase: '28.2%',
            Profit: <Profit price={854.94} />,
            PurchasePrice: '640.99 $',
            CurrentPrice: '3000.00 $',
            ClosingPrice: '3845.00 $',
            OpeningDate: '08.10.24',
            ClosingDate: '-'
        },
    ];

    return (
        <div className="portfolioContainer">
            <SideBar />
            <div className="portfolioContainerData">
                <Header name={'PORTFOLIO'} isUser={true} />
                <div className='portfolioStats'>
                    <IndicatorPortfolio icon={icons.iconPortfolioStat1} name={'Portfolio valuation'} price={0} symbol={'$'} />
                    <IndicatorPortfolio icon={icons.iconPortfolioStat2} name={'Profit'} price={0} symbol={'$'} />
                    <IndicatorPortfolio icon={icons.iconPortfolioStat3} name={'Increase'} price={0} symbol={'%'} />
                </div>
                <div className='portfolioFiltersAndSearchBlock'>
                    <div className='portfolioSearchFiltersBlock'>
                        <div className='portfolioSearchInputBox'>
                            <img src={icons.iconSearch} alt={'icon-search'} />
                            <input type="text" placeholder='search' />
                        </div>
                        <button className='portfolioSearchFilters' onClick={handleActiveFilter}>
                            <img src={icons.iconFilters} alt={'icon-filters'} />
                        </button>
                        <div className="counterFilters">
                            <div className="iconSelections">
                                <img src={icons.iconFilterEdit} alt='' />
                            </div>
                            <div className='selectSelections'>
                                <select id='numbers' name='numbers'>
                                    <option value={'10'}>10</option>
                                    <option value={'20'}>20</option>
                                    <option value={'30'}>30</option>
                                    <option value={'40'}>40</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {isActiveFilters && (
                        <div className='plusFilters'>
                            <div className='plusFiltersContainer'>
                                <p>Market type</p>
                                <div className='plusFiltersSelectBlock'>
                                    <select id='marketType' name='marketType'>
                                        <option value={'all'}>All</option>
                                        <option value={'fond'}>Fond</option>
                                        <option value={'crypto'}>Crypto</option>
                                    </select>
                                </div>
                            </div>
                            <div className='plusFiltersContainer'>
                                <p>Transaction status</p>
                                <div className='plusFiltersSelectBlock'>
                                    <select id='marketType' name='marketType'>
                                        <option value={'all'}>All</option>
                                        <option value={'pendingTransactions'}>Pending transactions</option>
                                        <option value={'openTransactions'}>Open transactions</option>
                                        <option value={'closedTransactions'}>Closed transactions</option>
                                    </select>
                                </div>
                            </div>
                            <div className='plusFiltersContainer'>
                                <p>Dynamics of the transaction</p>
                                <div className='plusFiltersSelectBlock'>
                                    <select id='marketType' name='marketType'>
                                        <option value={'all'}>All</option>
                                        <option value={'positiveTransactions'}>Positive transactions</option>
                                        <option value={'negativeTransactions'}>Negative transactions</option>
                                    </select>
                                </div>
                            </div>
                            <div className='plusFiltersContainer'>
                                <p>Payment status</p>
                                <div className='plusFiltersSelectBlock'>
                                    <select id='marketType' name='marketType'>
                                        <option value={'all'}>All</option>
                                        <option value={'paidServices'}>Paid services</option>
                                        <option value={'unpaidServices'}>Unpaid services</option>
                                    </select>
                                </div>
                            </div>
                            <div className="datesPeriodBox">
                                <p>Select interval</p>
                                <DateCalendar />
                            </div>
                        </div>
                    )}
                </div>
                <div className="tableBaseContainer">
                    <Paginator totalPages={7} />
                    <Table data={data} />
                </div>
            </div>
        </div>
    )
}
