import React from 'react'
import LangMenu from '../LangMenu/LangMenu';
import User from '../User/User';

import icons from '../../resources/icons';

import './Header.css';

export default function Header({ name, isUser }) {
    return (
        <div className="HeaderContainer">
            {name === 'Logo' ? (<img src={icons.loginLogo} alt="Logo" />) : (<p className='headerName'>{name}</p>)}
            <div className="rightData">
                {isUser && (
                    <User photo={''} username={'John Smith'} />
                )}
                <LangMenu className='langPeriodStyles' />
            </div>

        </div >
    )
}
