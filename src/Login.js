import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import Journal from './Journal';

function Login() {
    return (

        <div>
            
            <NavBar2 />
            Login Here
        
        </div>

    )
}

export default withAuthenticator(Journal)