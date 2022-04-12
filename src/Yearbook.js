import React, {useLayoutEffect, useState} from 'react'
import { NavBarLogout, MarketingFooter2, TempCover } from './ui-components'
import './NavBar2.css'
import { Text, withAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components';

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

    // const input = document.getElementById('capture');
    // html2canvas(input)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF('p', 'pt', [ 595.28,  841.89]);
        // pdf.addImage(imgData, 'JPEG', 1, 0, 595.28,  841.89);
        // pdf.output('dataurlnewwindow');
    //     // pdf.save("download.pdf");
    //   });
    
    }

const Button = styled.button`
  font-family: "HelveticaNeue-Light";
  cursor: pointer;
  color: #cccccc;
  border: none;
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
                    <Button onClick={ downloadPDF }>Download page</Button>
                    <Button onClick={ previewPDF }>Preview page</Button>
                    <CopyToClipboard text={url1}>
                        <Button>Copy URL to the clipboard</Button>
                    </CopyToClipboard>
                    <a href={'http://www.facebook.com/share.php?u=' + url1}>
                        <Button1>Share to Facebook</Button1>
                    </a>
                </h3>
                <TempCover id="capture" border="3px SOLID gray" borderRadius="1px"/>
            </div>
            <MarketingFooter2 /> 
        </div>
    
    )

}

export default withAuthenticator(Yearbook);