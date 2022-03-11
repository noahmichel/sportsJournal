import React, {useEffect, useState} from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2, NavBarLogout, ProfileHome } from './ui-components'
import './NavBar2.css'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function Profile() {

    return (

      <div>
        <NavBarLogout class="Header"/>
        <div style={{padding: '54px 0px 0px 0px'}}>
          <ProfileHome/>
          <MarketingFooter2/>
        </div>
      </div>

    )
}

export default withAuthenticator(Profile);