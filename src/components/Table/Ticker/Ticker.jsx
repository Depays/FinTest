import React from 'react'
import './Ticker.css'

import icons from '../../../resources/icons'

export default function Ticker({ BigIcon, headerType, header, desc, money }) {
    return (
        <div className='tickerComponentContainer'>
            <img src={BigIcon} alt='big-icon' className='bigIcon' />
            <div className='tickerComponentData'>
                <div className='tickerComponentHeader'>
                    <p className='tickerComponentHeaderName'>{header}</p>
                    <p className='tickerComponentHeaderType'>{headerType}</p>
                    <div className='tickerComponentCoinData'>
                        <img src={icons.iconCoin} alt='icon-coin' />
                        <p>{money}</p>
                    </div>
                </div>
                <p className='tickerComponentHeaderDescName'>{desc}</p>
            </div>

        </div>
    )
}
