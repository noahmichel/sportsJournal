import React, { useEffect, useState } from 'react';
import {NavBar2, MarketingFooter2, JournalHome, NavBarLogout } from './ui-components'
import './NavBar2.css'
import Amplify, { Auth, Hub } from "aws-amplify";
import Advanced from './Advanced';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Journal() {

    let [user, setUser] = useState(null)
    useEffect(() => {
      let updateUser = async authState => {
        try {
          let user = await Auth.currentAuthenticatedUser()
          setUser(user)
        } catch {
          setUser(null)
        }
      }
      Hub.listen('auth', updateUser) // listen for login/signup events
      updateUser() // check manually the first time because we won't get a Hub event
      return () => Hub.remove('auth', updateUser) // cleanup
    }, []);

    if(user) {

        return (
          
        <div className="Journal">

          
          <NavBarLogout class="Header"/>
          <JournalHome/>
          <MarketingFooter2/>

        </div>
        )
    } else {
        return (
        <div className="Journal">

          
          <NavBar2 class="Header"/>
          <JournalHome/>
          <MarketingFooter2/>
            
        </div>

        )
    }
}

export default Journal;
