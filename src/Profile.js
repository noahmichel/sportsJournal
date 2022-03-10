import React, {useEffect, useState} from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {NavBar2, MarketingFooter2, NavBarLogout, ProfileHome } from './ui-components'
import './NavBar2.css'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

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
    

    //This is for default !!!!
    const avatar = Storage.get("default-user.jpg")
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
              } else {
                getDefaultProfilePicture();
              }
            });
          })
          .catch(err => console.log(err));
      };

      const getDefaultProfilePicture = () => {
        Storage.get("default-user.jpg", {
          level: "public"
        })
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
        <NavBarLogout class="Header"/>
        <div style={{padding: '54px 0px 0px 0px'}}>
          <ProfileHome/>
          <MarketingFooter2/>
        </div>
      </div>

    )
}

export default withAuthenticator(Profile);