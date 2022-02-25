import React from 'react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Yearbook() {
    return (

        <div>
            
            <NavBar2 class="Header"/>
            Welcome to your yearbook!
            
        </div>

    )
}

export default withAuthenticator(Yearbook);