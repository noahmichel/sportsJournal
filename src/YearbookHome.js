import React from 'react'
import { NavBarLogout, MarketingFooter2, TempCover } from './ui-components'
import './NavBar2.css'
import { Button, Text, withAuthenticator } from '@aws-amplify/ui-react'
import {Link} from 'react-router-dom';
import { API, Auth } from 'aws-amplify'

var id = "";

Auth.currentAuthenticatedUser().then((user) => {
  id = user.signInUserSession.idToken.jwtToken.substring(0,8);
});

function Yearbook() {

    return (
        <div style={{backgroundColor: 'black'}}>
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 250px 0px', backgroundColor: 'black'}}>
                <h3>
                    <Link to={'/yearbook/' + id}>
                    <Button variation="primary">Get Started</Button>
                    </Link>
                </h3>
            </div>
            <MarketingFooter2 /> 
        </div>
    )
}
export default withAuthenticator(Yearbook);