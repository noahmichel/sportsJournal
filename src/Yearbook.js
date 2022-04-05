import React from 'react'
import { NavBarLogout, MarketingFooter2, TempCover } from './ui-components'
import './NavBar2.css'
import { Button, Text, withAuthenticator } from '@aws-amplify/ui-react'
import { API, Auth } from 'aws-amplify'


function Yearbook() {

    async function callApi() {
        const user = await Auth.currentAuthenticatedUser()
        const token = user.signInUserSession.idToken.jwtToken
        console.log({ token })

        //whatever info you want to get
        const requestInfo = {
            headers: {
                Authorization: token
            }
        }

        const data = await API.get('reactSportsJournalAPI', '/items', requestInfo)
        console.log( {data} )
        console.log( JSON.stringify(data) )
    }

    return (

        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 400px 0px', backgroundColor: 'black'}}>
                <h2 style={{backgroundColor: 'black', color: 'white', fontFamily: 'HelveticaNeue-Light', fontWeight: '300'}}>
                Yearbook, Coming Soon!
                </h2>
                <Button onClick={callApi} variation="primary" size="large">Call API</Button>
                {/* <TempCover/> */}
            </div>
            <MarketingFooter2 /> 
        </div>

    )
}

export default withAuthenticator(Yearbook);