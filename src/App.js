import logo from './logo.svg';
import './App.css';
import { SocialA2, NavBar2, MarketingFooter2, FeaturesText2x2x, HeroLayout1x } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'
import styled from 'styled-components';

const Popup = styled.div`
  width: 200px;
  height: 200px;
  transition: opacity 0.5s;
  opacity: ${({ showPopup }) => (showPopup ? '1' : '0')};
`;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    
    
      <div style={{background:'black' }}>
        <NavBar2 />

        <HeroLayout1x/>
        <FeaturesText2x2x/>
        
        {/* <SocialA2 />
        <SocialA2 />
        <SocialA2 />
        <SocialA2 /> */}

        <MarketingFooter2/>
        
      </div>
  );
}

export default App;
//export default withAuthenticator(App)
