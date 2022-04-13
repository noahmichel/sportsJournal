import React, {useLayoutEffect, useState} from 'react'
import { NavBarLogout, MarketingFooter2, Classof2021, InternBiosPg1 } from './ui-components'
import './NavBar2.css'
import { Text, withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components';
import { Flex } from "@aws-amplify/ui-react";
import {Link} from 'react-router-dom';

var id = "";
Auth.currentAuthenticatedUser().then((user) => {
    id = user.signInUserSession.idToken.jwtToken.substring(0,8);
    
  });

function downloadPDF() {

    const input = document.getElementById('capture');
    html2canvas(input,{ logging: true, letterRendering: 1, allowTaint: true, useCORS: true }).then(canvas => {
        var imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p', 'pt', [ 595.28,  841.89]);
        pdf.addImage(imgData, 'JPEG', 1, 0, 595.28,  841.89);
        pdf.save("download.pdf");
      });
}

function previewPDF() {

    const input = document.getElementById('capture');
    html2canvas(input,{ logging: true, letterRendering: 1, allowTaint: true, useCORS: true }).then(canvas => {
        var imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p', 'pt', [ 595.28,  841.89]);
        pdf.addImage(imgData, 'JPEG', 1, 0, 595.28,  841.89);
        pdf.output('dataurlnewwindow');
        });
    }

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

const Button2 = styled.button`
    font-family: "HelveticaNeue-Light";
    cursor: pointer;
    color: #cccccc;
    background: none;
    padding: 4px 15px;
    font-size: 20px;
    line-height: 20px;
    border: 1px SOLID #cccccc;
    border-radius: 2px;
    position: relative;
    height: 2.5rem;

    transition: all 0.2s ease-in;

    &:hover {
     border: 1px SOLID white;
     color: white;
    }
`;

const Button3 = styled.button`
    font-family: "HelveticaNeue-Light";
    cursor: pointer;
    color: #cccccc;
    background: none;
    padding: 4px 15px;
    font-size: 20px;
    line-height: 20px;
    border: 1px SOLID #cccccc;
    border-radius: 2px;
    position: relative;
    height: 2.5rem;

    transition: all 0.2s ease-in;

    &:hover {
    border: 1px SOLID white;
    color: white;
    }
`;

async function savePDF () {

    const input = document.getElementById('capture');
    await html2canvas(input,{ logging: true, letterRendering: 1, allowTaint: true, useCORS: true }).then(canvas => {
        var imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p', 'pt', [ 595.28,  841.89]);
        pdf.addImage(imgData, 'JPEG', 1, 0, 595.28,  841.89);
        Storage.put("yearbookPage3.pdf", pdf.output('arraybuffer'), {
            contentType: "application/pdf"
        })
    });
    console.log("finished");
  }

function YearbookPage3() {

    const url1 = window.location.href;

    return (
        
        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 75px 0px', backgroundColor: 'black'}}>
                <h3>
                <Button onClick= { savePDF }>Save to the Cloud</Button>
                    <Button onClick={ downloadPDF }>Download page</Button>
                    <Button onClick={ previewPDF }>Preview page</Button>
                    <CopyToClipboard text={url1}>
                        <Button>Copy URL to the clipboard</Button>
                    </CopyToClipboard>
                    <a href={'http://www.facebook.com/share.php?u=' + url1} target="_blank" rel="noopener noreferrer">
                        <Button1>Share to Facebook</Button1>
                    </a>
                </h3>
            
                <Flex 
                direction="row"
                justifyContent="center"
                alignItems="felx-start"
                alignContent="flex-start"
                wrap="nowrap"
                gap="2rem"
                padding= "0px 0px 50px 0px"
                >
                    <Link to= {"/yearbook/" + id + "/page2"}>
                        <Button3>Prev Page</Button3>
                    </Link>
                    <InternBiosPg1 id="capture" border="2px SOLID gray" borderRadius="2px"/>
                    <Link to ={"/yearbook/" + id + "/page4"}>
                        <Button2 >Next Page</Button2>
                    </Link>
                </Flex>
            
            <MarketingFooter2 /> 
            </div>
        </div>
    
    )

}

export default withAuthenticator(YearbookPage3);