import React, { useEffect, useState } from 'react';
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x, FAQItemHome1, CardGJon, CardGianChurch, NavBarLogout } from './ui-components'
import './NavBar2.css'
import $ from 'jquery'; 
import Amplify, { Auth, Hub } from "aws-amplify";

$(function(){  // $(document).ready shorthand
    $('.monster').slideIn('fast');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll(function() {
      
          /* Check the location of each desired element */
          $('.hideme').each(function(i) {
              
              var bottom_of_object = $(this).position().top + 100;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ) {
                  
                $(this).animate({'opacity':'1'},1000);       
              }    
          }); 
      });
  });

function Home() {
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
            <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            <HeroLayout1x/>
            <FeaturesText2x2x class ="hideme"/>
            <FAQItemHome1 class ="hideme"/>
            <CardGJon class ="hideme"/>
            <CardGianChurch class ="hideme"/>
            <MarketingFooter2 /> 
                
            </div>
        );
    } else {
        return (
            <div style={{backgroundColor: 'black'}}>
            
            <NavBar2 class="Header"/>
            <HeroLayout1x/>
            <FeaturesText2x2x class ="hideme"/>
            <FAQItemHome1 class ="hideme"/>
            <CardGJon class ="hideme"/>
            <CardGianChurch class ="hideme"/>
            <MarketingFooter2 /> 
                
            </div>
        );
    }
}


export default Home;
