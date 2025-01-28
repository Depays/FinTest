import React, { useState } from 'react';
import './WalletMethod.css';
import WalletMethodCoin from './WalletMethodCoin/WalletMethodCoin';
import ModalWalletAddress from '../Modal/ModalWalletAddress/ModalWalletAddress';

export default function WalletMethod({ coin, onContentChange, withdraw, fondStatement }) {
    const [isNetworkSelected, setIsNetworkSelected] = useState(false);

    const handleNetworkSelectionChange = (isSelected) => {
        setIsNetworkSelected(isSelected);
    };

    const handleGenerateWallet = () => {
        onContentChange(<ModalWalletAddress />);
    };

    return (
        <div className='walletMethodContainer'>
            <div className='leftWalletDataContainer'>
                <WalletMethodCoin coin={coin} onNetworkSelectionChange={handleNetworkSelectionChange} fondStatement={fondStatement} />
                {isNetworkSelected && withdraw && !fondStatement && (
                    <input type="text" className="amount" placeholder='Amount, $' />
                )}
            </div>

            <button
                className={`approveMethod ${isNetworkSelected || fondStatement ? 'active' : ''}`}
                onClick={handleGenerateWallet}
            >
                {!fondStatement ? <p>Generate wallet</p> : <p>Download</p>}
            </button>
        </div>
    );
}
