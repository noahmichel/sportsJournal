import React from 'react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x, FAQItem, CardG, CardGianChurch } from './ui-components'
import './NavBar2.css'
import $ from 'jquery'; 

$(function(){  // $(document).ready shorthand
    $('.monster').slideIn('fast');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
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
    return (

        <div style={{backgroundColor: 'black'}}>
        
        <NavBar2 class="Header"/>
        <HeroLayout1x/>
        <FeaturesText2x2x class ="hideme"/>
        <FAQItem class ="hideme"/>
        <CardG class ="hideme"/>
        <CardGianChurch class ="hideme"/>
        <MarketingFooter2 /> 
            
        </div>

    )
}

export default Home;
