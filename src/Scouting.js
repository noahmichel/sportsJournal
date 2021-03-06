import React from 'react'
import { NavBarLogout, MarketingFooter2, MacBookPro141 } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Scouting() {
    return (

        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 400px 0px', backgroundColor: 'black'}}>
                <h2 style={{backgroundColor: 'black', color: 'white', fontFamily: 'HelveticaNeue-Light', fontWeight: '300'}}>
                Scouting, Coming Soon!
                </h2>
                {/* <MacBookPro141/> */}
            </div>
            <MarketingFooter2 /> 
        </div>

    )
}

export default withAuthenticator(Scouting);