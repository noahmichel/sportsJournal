import React, { useEffect, useState } from 'react';
import {NavBarLogout, AnswerQuestionComplete } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'

function BeginnerComplete() {
    return (
        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
                <AnswerQuestionComplete/>
            </div>
        </div>
    )
}

export default withAuthenticator(BeginnerComplete);