import './App.css';
import { SocialA2, NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'
import styled from 'styled-components';
import Journal from './Journal';
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/journal" component={Journal}/>
        
      </div>
  );
}

export default App;
//export default withAuthenticator(App)
