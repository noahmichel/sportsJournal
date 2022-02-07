import React from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'

function Login() {
    return (

        <div>
            <h1>
            <NavBar2 />
                Login Here
            </h1>
        </div>

    )
}

export default withAuthenticator(Login)