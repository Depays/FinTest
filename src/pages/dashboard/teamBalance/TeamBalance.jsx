import React from 'react'
import './TeamBalance.css'

import icons from '../../../resources/icons';
import InTeam from '../../../components/inTeam/InTeam';
import Indicator from '../../../components/Indicator/Indicator';

export default function TeamBalance() {
    return (
        <div className='teamBalanceContainer'>
            <div className="headerIndicators">
                <InTeam price={0} />
                <Indicator icon={''} name={'Expected bonus USD'} price={0} symbol={'$'} isRight={true} />
            </div>
            <div className="teamBalanceData">
                <div className="teamBalanceTextData">
                    <div className='textData'>
                        <p className='textData'>All time bonuses withdrawn</p>
                        <p className='textData price'>0.00 $</p>
                    </div>
                    <div className='textData'>
                        <p className='textData'>Available bonuses for withdrawal</p>
                        <p className='textData price'>0.00 $</p>
                    </div>
                </div>
                <div className="teamBalanceBtnData">
                    <button className='btn copyLink'>
                        <img src={icons.iconCopyLink} alt='copy-link' />
                        <p className='dataTextTeam'>Copy link</p>
                    </button>
                    <button className='btn agentAccount'>
                        <p className='dataTextTeam'>Agent account</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
