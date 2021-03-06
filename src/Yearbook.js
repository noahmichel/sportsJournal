import React, {useLayoutEffect, useState} from 'react'
import { NavBarLogout, MarketingFooter2, TempCover } from './ui-components'
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
        Storage.put("yearbookCover.pdf", pdf.output('arraybuffer'), {
            contentType: "application/pdf"
        })
    });
    console.log("finished");
  }

  async function viewYearbook () {

    await Storage.get('yearbookCover.pdf', { download: true }).then(result => {
            const pdf = new jsPDF(result, 'JPEG', 1, 0, 595.28,  841.89);
            result.output('dataurlnewwindow');
    })
    console.log("finished");
  }

function Yearbook() {

    // async function callApi() {
    //     const user = await Auth.currentAuthenticatedUser()
    //     const token = user.signInUserSession.idToken.jwtToken
    //     console.log({ token })

    //     //whatever info you want to get
    //     const requestInfo = {
    //         headers: {
    //             Authorization: token
    //         }
    //     }

    //     const data = await API.get('reactSportsJournalAPI', '/items', requestInfo)
    //     console.log( {data} )
    //     console.log( JSON.stringify(data) )
    // }

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
                ><Flex 
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    alignContent="flex-start"
                    wrap="nowrap"
                    gap="1rem"
                    padding= "0px 0px 0px 0px"
                            ><Link to= "/yearbook">
                                <Button3>Home</Button3>
                            </Link>
                            <Button3 onClick={ viewYearbook }>View Full Yearbook</Button3>
                        </Flex>
                    <TempCover id="capture" border="2px SOLID gray" borderRadius="2px"/>
                    <Link to = {'/yearbook/' + id + '/page1'}>
                        <Button2 >Next Page</Button2>
                    </Link>
                </Flex>
            
            <MarketingFooter2 /> 
            </div>
        </div>
    
    )

}

export default withAuthenticator(Yearbook);