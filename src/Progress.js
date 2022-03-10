import React from 'react'
import { NavBarLogout, ProgressHome } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Progress() {
    return (

        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
            <ProgressHome/>
            </div>
        </div>

    )
}

export default withAuthenticator(Progress);