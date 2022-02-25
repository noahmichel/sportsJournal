import React from 'react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Scouting() {
    return (

        <div>
            
            <NavBar2 class="Header"/>
            
            Scouting Section
            
            
        </div>

    )
}

export default withAuthenticator(Scouting);