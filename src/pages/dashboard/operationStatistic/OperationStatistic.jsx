import React from 'react'
import './OperationStatistic.css'

import Indicator from '../../../components/Indicator/Indicator';
import icons from '../../../resources/icons';

export default function OperationStatistic() {
    const buttons = [
        {
            icon: icons.addCircle,
            name: 'Deposit',
            link: '',
        },
        {
            icon: icons.minusCircle,
            name: 'Withdraw',
            link: '',
        },
        {
            icon: '',
            name: 'Operations',
            link: '',
        },
        {
            icon: '',
            name: 'Fond statement',
            link: '',
        },
    ];


    return (
        <div className='statisticContainer'>
            <div className='stats'>
                <Indicator icon={icons.greenIndicator} name={'Replenished USD'} price={0} symbol={'%'} />
                <Indicator icon={icons.redIndicator} name={'Withdrawn USD'} price={0} symbol={'$'} />
                <Indicator icon={''} name={'Total fond deposit'} price={0} symbol={'$'} isRight={true} />
            </div>
            <div className='buttons'>
                {buttons.map((button, index) => (
                    <button key={index} className='funcButton'
                        style={{
                            backgroundColor: index === 0 ? '#F6AC12' : 'transparent',
                            border: index === 0 ? 'none' : '1.51px solid #E2E1DD',
                        }}
                    >
                        <div className='dataBtn'>
                            {button.icon && <img src={button.icon} alt={button.name} />}
                            <p className='dataBtnName'>{button.name}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
