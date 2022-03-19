import React, { useEffect, useState } from 'react';
import {NavBar2, MarketingFooter2, JournalHome, NavBarLogout } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'

function Print() {
    return (

        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 400px 0px', backgroundColor: 'black'}}>
                <h2 style={{backgroundColor: 'black', color: 'white', fontFamily: 'HelveticaNeue-Light', fontWeight: '300'}}>
                Printable Journal, Coming Soon!
                </h2>
            </div>
            <MarketingFooter2 /> 
        </div>

    )
}

export default withAuthenticator(Print);