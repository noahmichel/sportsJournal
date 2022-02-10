import React from 'react'
import {NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x, FAQItem, CardG, CardGianChurch } from './ui-components'
import './NavBar2.css'
import $ from 'jquery'; 

$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('fast');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > (bottom_of_object-100) ){
                  
                  $(this).animate({'opacity':'1'},1000);
                      
              }
              
          }); 
      
      });
      
  });

function Home() {
    return (

        <div class="img-wrapper" style={{backgroundColor: 'black'}}>
        
        <NavBar2 class="Header"/>
        <HeroLayout1x/>
        <FeaturesText2x2x class ="hideme"/>
        <FAQItem class ="hideme"/>
        <CardG class ="hideme"/>
        <CardGianChurch class ="hideme"/>
        <MarketingFooter2/> 
            
        </div>

    )
}

export default Home;
