/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Canvaseditme from "./Canvaseditme";
import { Text, View, Image } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";

export default function ProfileBannerdesktop(props) {
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
    <View
      width="100vw"
      height="240px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileBannerdesktop")}
    >
      <Canvaseditme
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Canvas [edit me]")}
      ></Canvaseditme>
      <View
        width="328px"
        height="240px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <View
          height="240px"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          // backgroundColor="rgba(255,225,225,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Crop zone lefttry")}
        ></View>
      </View>
      <View
        width="328px"
        height="240px"
        position="absolute"
        top="0px"
        right="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <View
          height="240px"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          // backgroundColor="rgba(255,225,225,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Crop zone leftulf")}
        ></View>
      </View>
      <View
        width="100vw"
        height="20px"
        position="absolute"
        top="240px"
        left="calc(50% - 512px - 0px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Safe zone")}
      >
        <View
          height="240px"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          // backgroundColor="rgba(232,255,221,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Safe zone overlay")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="274px"
          height="192px"
          position="absolute"
          top="30px"
          left="374px"
          {...getOverrideProps(overrides, "Dimensions")}
        >
          <Text
            fontFamily="Helvetica"
            fontSize="100px"
            fontWeight="700"
            color="rgba(15,15,15,1)"
            lineHeight="117.1875px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 41px - 55px)"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            // children="Profile Banner&#xA;1680 x 240"
            {...getOverrideProps(overrides, "Profile Banner 1680 x 240")}
          ></Text>
          <Text
            fontFamily="Helvetica"
            fontSize="100px"
            fontWeight="700"
            color="rgba(7,112,74,1)"
            lineHeight="117.1875px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 35px - -61px)"
            left="21.53%"
            right="22.26%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            // children="Safe Zone&#xA;1024 x 240"
            {...getOverrideProps(overrides, "Safe Zone 1024 x 240")}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="128px"
        height="128px"
        position="absolute"
        top="148px"
        left="26px"
        {...getOverrideProps(overrides, "Profile picture")}
      ><a href="Select your profile picture">
        <input
        type="file"
        onChange={onProcessFile}
        ref={fileInput}
        hidden={true}
        />
      </a>
        <Image
          width="128px"
          height="128px"
          position="absolute"
          top="0px"
          left="0px"
          border="3px SOLID rgba(255,255,255,1)"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          backgroundColor="white"
          src={image}
          onClick={onOpenFileDialog}
          {...getOverrideProps(overrides, "Total overlay")}
        ></Image>
      </View>
    </View>
  );
}
