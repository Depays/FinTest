import React from 'react'
import './OperationPortfolio.css'
import Profit from '../../Table/Profit/Profit'

export default function OperationPortfolio({ icon, name, type, increase, price }) {
    return (
        <div className='operationPortfolioContainer'>
            <div className='operPortIconBox'>
                <img src={icon} alt='coin-icon' style={{ paddingRight: '11px' }} />
                <p className='name'>{name}</p>
                <p className='type'>{type}</p>
            </div>
            <div className='rightContainerPortOper'>
                <p className='increase'>{increase}%</p>
                <Profit price={price}/>
            </div>
        </div>
    )
}
