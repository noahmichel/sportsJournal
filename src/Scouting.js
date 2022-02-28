import React from 'react'
import { NavBarLogout } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Scouting() {
    return (

        <div>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 54px 0px'}}>
            <h2>
            Scouts!
            </h2>
            </div>
        </div>

    )
}

export default withAuthenticator(Scouting);