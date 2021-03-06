import './App.css';
import { SocialA2, NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'
import styled from 'styled-components';
import Journal from './Journal';
import Home from './Home';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import Progress from './Progress';
import Scouting from './Scouting';
import Yearbook from './Yearbook';
import Login from './Login';
import Profile from './Profile';
import Advanced from './Advanced';
import Intermediate from './Intermediate';
import Beginner from './Beginner'
import Print from './Print';
import Selection from './Selection'
import Beginner2 from './Beginner2'
import Beginner3 from './Beginner3'
import Beginner4 from './Beginner4'
import Beginner5 from './Beginner5'
import BeginnerComplete from './BeginnerComplete';
import ProfilePublished from './ProfilePublished';
import YearbookHome from './YearbookHome';
import YearbookPage1 from './YearbookPage1';
import YearbookPage2 from './YearbookPage2';
import YearbookPage3 from './YearbookPage3.js';
import YearbookPage4 from './YearbookPage4';
import Upload from './Upload';

function App() {
  return (
    
      <div className="App">
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/journal" component={Journal}/>
        <Route exact path="/progress" component={Progress}/>
        <Route exact path="/scouting" component={Scouting}/>
        <Route exact path="/yearbook/:id" component={Yearbook}/>
        <Route exact path="/yearbook" component={YearbookHome}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/myProfile" component={ProfilePublished}/>
        <Route exact path="/journal/advanced" component={Advanced}/>
        <Route exact path="/journal/intermediate" component={Intermediate}/>
        <Route exact path="/journal/beginner" component={Beginner}/>
        <Route exact path="/journal/print" component={Print}/>
        <Route exact path="/journal/selection" component={Selection}/>
        <Route exact path="/journal/beginner2" component={Beginner2}/>
        <Route exact path="/journal/beginner3" component={Beginner3}/>
        <Route exact path="/journal/beginner4" component={Beginner4}/>
        <Route exact path="/journal/beginner5" component={Beginner5}/>
        <Route exact path="/journal/beginnerComplete" component={BeginnerComplete}/>
        <Route exact path="/myProfile/edit" component={Profile}/>
        <Route exact path="/yearbook/:id/page1" component={YearbookPage1}/>
        <Route exact path="/yearbook/:id/page2" component={YearbookPage2}/>
        <Route exact path="/yearbook/:id/page3" component={YearbookPage3}/>
        <Route exact path="/yearbook/:id/page4" component={YearbookPage4}/>
        <Route exact path="/upload/:id" component={Upload}/>
        
      </div>
  );
}

export default App;
//export default withAuthenticator(App)
