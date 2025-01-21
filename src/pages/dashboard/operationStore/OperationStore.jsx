import React, { useState } from 'react'
import './OperationStore.css'

import icons from '../../../resources/icons';



export default function OperationStore() {
    const [selectedTab, setSelectedTab] = useState('invest');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="operationStoreContainer">
            <div className='headerData'>
                <p className='operationStoreHeader'>Operations store</p>
                <div className='tabViewOperStore'>
                    <button
                        className={`tabViewBtn left ${selectedTab === 'invest' ? 'active' : ''}`}
                        onClick={() => handleTabChange('invest')}
                    >
                        <p className={`tabViewBtnText ${selectedTab === 'invest' ? 'activeText' : ''}`}>Invest account</p>
                    </button>
                    <button
                        className={`tabViewBtn right ${selectedTab === 'agent' ? 'active' : ''}`}
                        onClick={() => handleTabChange('agent')}
                    >
                        <p className={`tabViewBtnText ${selectedTab === 'agent' ? 'activeText' : ''}`}>Agent account</p>
                    </button>
                </div>
            </div>
            <div className='operationsData'>
                <img src={icons.iconNotOperations} alt="empty-operaions"/>
                <p className='comment'>No account details yet</p>
            </div>

        </div>
    )
}
