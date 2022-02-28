import React, { useEffect, useState } from 'react';
import {NavBar2, MarketingFooter2, JournalHome, NavBarLogout } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'

function Advanced() {
    return (
        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 54px 0px'}}>
                <h1>
                Advanced Section
                </h1>
            </div>
        </div>
    )
}

export default withAuthenticator(Advanced);