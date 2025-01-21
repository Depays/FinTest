import React from 'react'
import { Outlet } from "react-router-dom";

import './Auth.css';

import Header from '../../components/Header/Header';

export default function Auth() {
    return (
        <div className='AuthBasePage'>
            <div style={{ width: '100%' }}>
                <Header name={'Logo'} isUser={false} />
            </div>
            <main className='mainData'>
                <Outlet />
            </main>
        </div>
    )
}
