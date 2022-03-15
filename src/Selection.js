import React from 'react'
import { NavBarLogout, Progress2, ProgressHome, SelectTopic } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Selection() {
    return (

        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
            <SelectTopic/>
            </div>
        </div>

    )
}

export default withAuthenticator(Selection);