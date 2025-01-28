import React from 'react'
import './IndicatorPortfolio.css'

export default function IndicatorPortfolio({ name, icon, price, symbol }) {
    const roundedPrice = parseFloat(price).toFixed(2);

    return (
        <div className='indicatorPortfolioContainer'>
            <p className='indicatorPortfolioHeader'>{name}</p>
            <div className='indicatorPortfolioData'>
                <img src={icon} alt="icon-stats" />
                <p className='indicatorPortfolioTextPrice'>
                    {symbol === '%' ? price : roundedPrice} {symbol}
                </p>
            </div>
        </div>
    )
}
