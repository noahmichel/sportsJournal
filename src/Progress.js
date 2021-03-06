import React from 'react'
import { NavBarLogout, Progress2, ProgressHome } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Progress() {
    return (

        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
            <Progress2/>
            </div>
        </div>

    )
}

export default withAuthenticator(Progress);