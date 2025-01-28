import React, { useState } from 'react';
import './WalletMethodCoin.css';

import icons from '../../../resources/icons';

export default function WalletMethodCoin({ coin, onNetworkSelectionChange, fondStatement }) {
    const [selectedNetwork, setSelectedNetwork] = useState(null);

    const coinIcon = coin === 'USDT' ? icons.iconUsdt : (coin === 'USDC' ? icons.iconUsdc : (coin === 'IB' ? icons.iconIB : icons.iconBinane));

    const handleNetworkSelection = (network) => {
        const newSelection = selectedNetwork === network ? null : network;
        setSelectedNetwork(newSelection);

        onNetworkSelectionChange(newSelection !== null);
    };

    return (
        <div className='walletMethodCoinContainer'>
            <img src={coinIcon} alt='coin' />
            <div className='coinData'>
                {fondStatement ? (
                    <p className="coinDataHeader">
                        {coin} statement
                    </p>
                ) : (
                    <p className="coinDataHeader">
                        Wallet {coin}
                    </p>
                )}
                {!fondStatement && (
                    <div className='checkBoxNetworksData'>
                        {/* TRC20 Network */}
                        <div className='NetworkData'>
                            <div>
                                <input
                                    type="checkbox"
                                    id={`customCheckboxTRC20-${coin}`}
                                    checked={selectedNetwork === 'TRC20'}
                                    onChange={() => handleNetworkSelection('TRC20')}
                                />
                                <label htmlFor={`customCheckboxTRC20-${coin}`}>
                                    {selectedNetwork === 'TRC20' && (
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7841 0.648397C11.522 0.430585 11.1228 0.455189 10.8929 0.704799L4.168 8.00655L1.09226 4.8894C0.853527 4.64818 0.45437 4.63618 0.199843 4.86239C-0.0546841 5.08859 -0.0679495 5.46902 0.170781 5.71084L3.72335 9.311C3.78259 9.37069 3.85405 9.41825 3.93333 9.45075C4.01262 9.48325 4.09806 9.50001 4.18441 9.5H4.19514C4.37387 9.49759 4.54187 9.4232 4.65997 9.29539L11.8441 1.49504C12.0733 1.24543 12.0468 0.866811 11.7841 0.648397Z" fill="#021E2F" />
                                        </svg>
                                    )}
                                </label>
                            </div>
                            <p>TRC20</p>
                        </div>
                        {/* ERC20 Network */}
                        <div className='NetworkData'>
                            <div>
                                <input
                                    type="checkbox"
                                    id={`customCheckboxERC20-${coin}`}
                                    checked={selectedNetwork === 'ERC20'}
                                    onChange={() => handleNetworkSelection('ERC20')}
                                />
                                <label htmlFor={`customCheckboxERC20-${coin}`}>
                                    {selectedNetwork === 'ERC20' && (
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.7841 0.648397C11.522 0.430585 11.1228 0.455189 10.8929 0.704799L4.168 8.00655L1.09226 4.8894C0.853527 4.64818 0.45437 4.63618 0.199843 4.86239C-0.0546841 5.08859 -0.0679495 5.46902 0.170781 5.71084L3.72335 9.311C3.78259 9.37069 3.85405 9.41825 3.93333 9.45075C4.01262 9.48325 4.09806 9.50001 4.18441 9.5H4.19514C4.37387 9.49759 4.54187 9.4232 4.65997 9.29539L11.8441 1.49504C12.0733 1.24543 12.0468 0.866811 11.7841 0.648397Z" fill="#021E2F" />
                                        </svg>
                                    )}
                                </label>
                            </div>
                            <p>ERC20</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
