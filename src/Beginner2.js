import React, { useEffect, useState } from 'react';
import {NavBarLogout, AnswerQuestion2 } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator } from '@aws-amplify/ui-react'

function Beginner2() {
    return (
        <div>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 0px 0px'}}>
                <AnswerQuestion2/>
            </div>
        </div>
    )
}

export default withAuthenticator(Beginner2);