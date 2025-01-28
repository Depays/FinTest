import React from 'react'
import './OperationInStore.css'

export default function OperationInStore({ icon, name, date, price, profit }) {
    return (
        <div className='OperationInStoreContainer'>
            <div className='leftDataOperationInStoreContainer'>
                <div className="circleForImageOperStore">
                    {/* <img src={icon} alt={operation-icon} /> */}
                </div>
                <div className='containerTextesOperationInStore'>
                    <p className='general'>{name}</p>
                    <p className='date'>{date}</p>
                </div>
            </div>
            <p className='profitText' style={{ color: profit ? '#50AF95' : '#021E2F' }}>
                {profit ? '+' : '-'} {price} $
            </p>
        </div>

    )
}
