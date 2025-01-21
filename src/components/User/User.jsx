import React from 'react'

import userIcon from '../../assets/icon-user.svg';

import './User.css';

export default function User({ photo, username }) {
    return (
        <div className='userContainer'>
            {photo === '' ? (
                <img src={userIcon} alt='user-icon' />
            ) : null}
            <label className='name'>
                {username}
            </label>
        </div>
    )
}
