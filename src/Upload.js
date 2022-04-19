import React, {useEffect, useState} from 'react'
import { NavBarLogout, MarketingFooter2, UploadField } from './ui-components'
import './NavBar2.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import styled from 'styled-components';
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import {Link} from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'

var id = "";
Auth.currentAuthenticatedUser().then((user) => {
    id = user.signInUserSession.idToken.jwtToken.substring(0,8);
  });

  const Button = styled.button`
  font-family: "HelveticaNeue-Light";
  cursor: pointer;
  color: #cccccc;
  background: none;
  padding: 4px 15px;
  font-size: 20px;
  line-height: 20px;
  border: 1px SOLID #cccccc;
  border-radius: 2px;

  transition: all 0.2s ease-in;

   &:hover {
    border: 1px SOLID white;
    color: white;
   }
`;

const Button1 = styled.button`
  font-family: "HelveticaNeue-Light";
  cursor: pointer;
  color: #4267B2;
  border: none;
  background: none;
  padding: 4px 15px;
  font-size: 20px;
  line-height: 20px;

  transition: all 0.2s ease-in;

   &:hover {
     color: #3d74f5;
   }
`;

function Upload() {

    const url1 = window.location.href;


    return (

        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 400px 0px', backgroundColor: 'black'}}>
                <h3>
                    <CopyToClipboard text={url1}>
                        <Button>Copy URL to the clipboard</Button>
                    </CopyToClipboard>
                    <a href={'http://www.facebook.com/share.php?u=' + url1} target="_blank" rel="noopener noreferrer">
                        <Button1>Share to Facebook</Button1>
                    </a>
                </h3>
                <Flex 
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    alignContent="flex-start"
                    wrap="nowrap"
                    gap="1rem"
                    padding= "0px 0px 0px 0px"
                            >
                <UploadField />
                </Flex>
            </div>
            <MarketingFooter2 /> 
        </div>

    )
}

export default withAuthenticator(Upload);