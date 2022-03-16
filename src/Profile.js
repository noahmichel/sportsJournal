import React, {useEffect, useState} from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2, NavBarLogout, ProfileHome, Wireframe } from './ui-components'
import './NavBar2.css'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function Profile() {

    return (

      <div style={{backgroundColor: "#555B6E"}}>
        <NavBarLogout class="Header"/>
        <div style={{padding: '54px 0px 0px 0px'}}>
          <ProfileHome class ="profile"/>
          <Wireframe/>
          <MarketingFooter2 style={{top: '-110px'}}/>
        </div>
      </div>

    )
}

export default withAuthenticator(Profile);