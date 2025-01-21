import React from 'react'
import './InTeam.css'

import icons from '../../resources/icons'

export default function InTeam({ price }) {
    return (
        <div className="inTeamContainer">
            <p className='inTeamHeader'>In team</p>
            <div className='inTeamData'>
                <img src={icons.iconInTeam} alt='team-icon' />
                <p className='inTeamPrice'>{price}</p>
            </div>
        </div>
    )
}
