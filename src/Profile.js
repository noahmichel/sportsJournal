import React, {useEffect, useState} from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2 } from './ui-components'
import './NavBar2.css'
import Amplify, { Analytics, Auth, Storage } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

async function ionViewCanEnter() {
  try {
      await Auth.currentAuthenticatedUser();
      return true;
  } catch {
      return false;
  }
}

function Profile() {

    Storage.configure({ track: true, level: "private" });

    let fileInput = React.createRef();
    
      const onOpenFileDialog = () => {
        fileInput.current.click();
      };
    
      const onProcessFile = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        try {
          reader.readAsDataURL(file);
        } catch (err) {
          console.log(err);
        }
        reader.onloadend = () => {
          setImage(reader.result);
        };
        Storage.put("profilePicture.png", file, {
          contentType: "image/png"
        })
          .then(result => console.log(result))
          .catch(err => console.log(err));
      };
    
    const avatar = Storage.get("Login.jpg");
    const [image, setImage] = useState(avatar);
    
      useEffect(() => {
        onPageRendered();
      }, []);
    
      const onPageRendered = async () => {
        getProfilePicture();
      };
    
      const getProfilePicture = () => {
        Storage.get("profilePicture.png")
          .then(url => {
            var myRequest = new Request(url);
            fetch(myRequest).then(function(response) {
              if (response.status === 200) {
                setImage(url);
              }
            });
          })
          .catch(err => console.log(err));
      };

    return (

        <div>
            
            <NavBar2 class="Header"/>
            
<div style={{padding: '54px 0px 54px 0px'}}>
    <h2>
Welcome to your Profile!
    </h2>   

<a href="Select your profile picture">
    <input
        type="file"
        onChange={onProcessFile}
        ref={fileInput}
        hidden={true}
     />
</a>
 <img src={image} onClick={onOpenFileDialog} />
            
            </div>
            <MarketingFooter2/>
        </div>

    )
}

export default withAuthenticator(Profile);