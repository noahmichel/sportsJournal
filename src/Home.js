import React from 'react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import './NavBar2.css'

function Home() {
    return (

        <div style={{backgroundColor: 'black'}}>
        
        <NavBar2 class="Header"/>
        <HeroLayout1x/>
        <FeaturesText2x2x/>
        <MarketingFooter2/> 
            
        </div>

    )
}

export default Home;
