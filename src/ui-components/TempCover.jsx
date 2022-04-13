/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useLayoutEffect, useState} from 'react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";

var username = "";

Auth.currentAuthenticatedUser().then((user) => {
  username = user.username;
});

var d = new Date();

var seasonArray = [
    {name: 'Spring', date: new Date(d.getFullYear(),2,(d.getFullYear() % 4 === 0) ? 19 : 20).getTime()},
    {name: 'Summer', date: new Date(d.getFullYear(),5,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()},
    {name: 'Autumn', date: new Date(d.getFullYear(),8,(d.getFullYear() % 4 === 0) ? 22 : 23).getTime()},
    {name: 'Winter', date: new Date(d.getFullYear(),11,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()}
];

const season = seasonArray.filter(({ date }) => date <= d).slice(-1)[0] || {name: "Winter"} 

export default function TempCover(props) {
  const { overrides, ...rest } = props;

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
      Storage.put("yearbookFront.png", file, {
        contentType: "image/png"
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    };
  

  //This is for default !!!!
  const avatar = Storage.get("default-user.jpg")
  const [image, setImage] = useState(avatar);
  
    useLayoutEffect(() => {
      onPageRendered();
    }, []);
  
    const onPageRendered = async () => {
      getProfilePicture();
    };
  
    async function getProfilePicture () {
      await Storage.get("yearbookFront.png")
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
        .catch(console.log("No yearbookFront.png available"));
    };

    async function getDefaultProfilePicture () {
      await Storage.get("profilePicture.png")
        .then(url => {
          var myRequest = new Request(url);
          fetch(myRequest).then(function(response) {
            if (response.status === 200) {
              setImage(url);
            } else {
              getDefaultProfilePicture2();
            }
          });
        })
        .catch(console.log("No profilePicture.png available"));
    };

    async function getDefaultProfilePicture2 () {
      await Storage.get("default-user.jpg", {
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
        .catch(console.log("No photos available"));
    };

  return (
    <View
      id="capture"
      width="612px"
      height="792px"
      overflow="hidden"
      position="relative"
      top="0px"
      // left="25%"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(210,210,210,1)"
      {...rest}
      {...getOverrideProps(overrides, "TempCover")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="759.64px"
        height="652px"
        position="absolute"
        top="5px"
        left="-69px"
        {...getOverrideProps(overrides, "Group 56")}
      >
        <Image
          position="absolute"
          right="28%"
          top="25px"
          position="relative"
          width="120px"
          height="70px"
          src={require('./mlbLogo.png')}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="225.89px"
          height="141.59px"
          position="absolute"
          top="175.03px"
          left="491px"
          transformOrigin="top left"
          transform="rotate(-21.84deg)"
          {...getOverrideProps(overrides, "Group 1428")}
        >
          <View
            width="215.71px"
            height="133.08px"
            position="absolute"
            top="4.86px"
            left="4.45px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            border="3px SOLID rgba(0,0,0,1)"
            backgroundColor="darkGray"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rectangle 98")}
          ></View>
          <View
            width="12.73px"
            height="12.15px"
            position="absolute"
            top="0px"
            left="0px"
            border="3px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 99")}
          ></View>
          <View
            width="12.73px"
            height="12.15px"
            position="absolute"
            top="129.43px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            border="3px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 101")}
          ></View>
          <View
            width="12.73px"
            height="12.15px"
            position="absolute"
            top="0px"
            left="213.16px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            border="5px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 100")}
          ></View>
          <View
            width="12.73px"
            height="12.15px"
            position="absolute"
            top="129.43px"
            left="213.16px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            border="5px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 102")}
          ></View>
        </View>
      </View>
      <Text
        fontFamily="HelveticaNeue"
        fontSize="58px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="64px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="relative"
        top="354px"
        width="612px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={username + "'s Yearbook"}
        {...getOverrideProps(overrides, "My Yearbook")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="92.78px"
        height="93px"
        position="absolute"
        top="377.95px"
        left="464px"
        transformOrigin="top left"
        transform="rotate(-48deg)"
        {...getOverrideProps(overrides, "Group 1430")}
      >
        <View
          width="77.98px"
          height="78.11px"
          position="absolute"
          top="calc(50% - 36.06px - -13.36px)"
          left="calc(50% - 35.99px - -86.24px)"
          transformOrigin="top left"
          transform="rotate(-159.22deg)"
          border="3px SOLID rgba(0,0,0,1)"
          borderRadius="297.5970153808594px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(237,245,250,1)"
          {...getOverrideProps(overrides, "Rectangle 2.12")}
        >
          <Image
          bottom="1px"
          right="0px"
          alignSelf="center"
          position="relative"
          transform="rotate(-159.22deg)"
          width="75px"
          height="75px"
          src={require('./baseballIcon.png')}
        ></Image>
      </View>
    </View>
      <View
        padding="0px 0px 0px 0px"
        width="300px"
        height="300px"
        position="absolute"
        top="495px"
        {...getOverrideProps(overrides, "Group 1401")}
      ><a href="Select your profile picture">
      <input
      type="file"
      onChange={onProcessFile}
      ref={fileInput}
      hidden={true}
      />
    </a>
      <Image
        borderRadius="50%"
        left="50%"
        position="relative"
        alignSelf="center"
        width="275px"
        height="275px"
        border="3px SOLID white"
        onClick={onOpenFileDialog}
        src={image}
        crossOrigin="anonymous"
      ></Image>
      </View>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="36px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="relative"
        top="375px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ season.name + " " + d.getFullYear()}
        {...getOverrideProps(overrides, "Spring 2022")}
      ></Text>
    </View>
  );
}
