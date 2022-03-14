import React, { useEffect, useState } from 'react';
import {NavBar2, MarketingFooter2, JournalHome, NavBarLogout, AnswerQuestion } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'

function Beginner() {
    return (
        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
                <AnswerQuestion/>
            </div>
        </div>
    )
}

export default withAuthenticator(Beginner);