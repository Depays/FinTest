import React from 'react'
import './ModalWalletAddress.css'

import icons from '../../../resources/icons';

export default function ModalWalletAddress() {

    return (
        <div className='globalContainer'>
            <img src={icons.iconQR} alt='qr' />
            <div className='modalWalletAddressContent'>
                <div className='headerContainerForLine'>
                    <p>Wallet address</p>
                </div>
                <div className='strAddress'>
                    <p>1jfokekfkklkk30kdkdjfkw-k3ok04i</p>
                </div>
                <button className='btnCopyAddress'>
                    <img src={icons.iconCopyLink} alt='copy-icon' />
                    <p>Copy</p>
                </button>
            </div>
        </div>
    );
}
