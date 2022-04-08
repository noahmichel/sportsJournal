import React from 'react'
import { NavBarLogout, MarketingFooter2, TempCover } from './ui-components'
import './NavBar2.css'
import { Button, Text, withAuthenticator } from '@aws-amplify/ui-react'
import { API, Auth } from 'aws-amplify'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CopyToClipboard } from 'react-copy-to-clipboard'

function downloadPDF() {

    const input = document.getElementById('capture');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: "portait"
        });
        pdf.addImage(imgData, 'JPEG', 5, 5, 200, 285);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
}

function previewPDF() {

    const input = document.getElementById('capture');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'pt', [ 595.28,  841.89]);
        pdf.addImage(imgData, 'JPEG', 1, 0, 595.28,  841.89);
        pdf.output('dataurlnewwindow');
        // pdf.save("download.pdf");
      });
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

    const url = window.location.href;

    return (
        

        <div style={{backgroundColor: 'black'}}>
            
            <NavBarLogout class="Header"/>
            
            <div style={{padding: '54px 0px 150px 0px', backgroundColor: 'black'}}>
                {/* <h2 style={{backgroundColor: 'black', color: 'white', fontFamily: 'HelveticaNeue-Light', fontWeight: '300'}}>
                Yearbook, Coming Soon!
                </h2> */}
                {/* <Button onClick={callApi} variation="primary" size="large">Call API</Button> */}
                <h3>
                    <button onClick={ downloadPDF }>Download page</button>
                    <button onClick={ previewPDF }>Preview page</button>
                    <CopyToClipboard text={url}>
                        <button>Copy URL to the clipboard</button>
                    </CopyToClipboard>
                    <a href={'http://www.facebook.com/share.php?u=' + url}>
                        <button>Share to Facebook</button>
                    </a>
                </h3>
                <TempCover id="capture" border="3px SOLID gray"/>
            </div>
            <MarketingFooter2 /> 
        </div>
    )
}

export default withAuthenticator(Yearbook);