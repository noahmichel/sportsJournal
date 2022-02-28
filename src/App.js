import './App.css';
import { SocialA2, NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'
import styled from 'styled-components';
import Journal from './Journal';
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Progress from './Progress';
import Scouting from './Scouting';
import Yearbook from './Yearbook';
import Login from './Login';
import Profile from './Profile';
import Advanced from './Advanced';

function App() {
  return (
    
      <div className="App">
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/journal" component={Journal}/>
        <Route exact path="/progress" component={Progress}/>
        <Route exact path="/scouting" component={Scouting}/>
        <Route exact path="/yearbook" component={Yearbook}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/myProfile" component={Profile}/>
        <Route exact path="/journal/advanced" component={Advanced}/>
        
      </div>
  );
}

export default App;
//export default withAuthenticator(App)
