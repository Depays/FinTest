import React from 'react';
import './ModalPlusDeposit.css';
import WalletMethod from '../../WalletMethod/WalletMethod';

const ModalPlusDeposit = ({ onContentChange, withdraw, fondStatement }) => {

    const modalDescText = (
        withdraw ? 'Min. period after deposit for withdrawal - 3 months. Withdrawal of profits at any time, from the 1st to the 10th of each month. A withdrawal request is created at any time, but the payout is from the 1st to the 10th.'
            : 'Replenishment only from $10,000'
    )

    return (
        <>
            <div className="headerDataModal">
                <p className='ModalHeader'>{fondStatement ? 'Fond statement' : 'Payment Methods'}</p>
                <p className='ModalDesc'>
                    {modalDescText}
                </p>
            </div>
            <div className="modalBodyCoins">
                <WalletMethod coin={fondStatement ? 'IB' : 'USDT'} onContentChange={onContentChange} withdraw={withdraw} fondStatement={fondStatement} />
                <WalletMethod coin={fondStatement ? 'Binance' : 'USDC'} onContentChange={onContentChange} withdraw={withdraw} fondStatement={fondStatement} />
            </div>
        </>
    );
};

export default ModalPlusDeposit;
