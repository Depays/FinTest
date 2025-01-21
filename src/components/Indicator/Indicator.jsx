import React from 'react'
import './Indicator.css'

export default function Indicator({ icon, name, price, symbol }) {
    const roundedPrice = parseFloat(price).toFixed(2);

    return (
        <div className='indicatorContainer'>
            {icon !== '' && (<img src={icon} alt="indicator" />)}
            <div className='textBlock' style={name === 'Total fond deposit' ? { textAlign: 'right' } : null}>
                <p className='indicatorName'>{name}</p>
                <p className='priceData'>{roundedPrice} {symbol}</p>
            </div>
        </div>
    )
}
