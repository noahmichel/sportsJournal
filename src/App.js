import logo from './logo.svg';
import './App.css';
import { ContactUs, SocialA, NavBar, SocialB, SideBar, SocialA2, NavBar2, MarketingFooter } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react'

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
    
    
    <div>
      
      <NavBar2 width={"100vw"}/>
      <SocialA2 width={"100vw"}/>
      <SocialA2 width={"100vw"}/>
      <SocialA2 width={"100vw"}/>
      //<MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;
//export default withAuthenticator(App)
