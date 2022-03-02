import React from 'react'
import { NavBarLogout, ProgressPanel, TaskManagementDashboard } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Progress() {
    return (

        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 54px 0px'}}>
            <ProgressPanel/>
            </div>
        </div>

    )
}

export default withAuthenticator(Progress);