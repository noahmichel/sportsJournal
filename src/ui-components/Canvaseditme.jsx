/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View, Image } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";

export default function Canvaseditme(props) {
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
        Storage.put("headerPicture.png", file, {
          contentType: "image/png"
        })
          .then(result => console.log(result))
          .catch(err => console.log(err));
      };
    

    //This is for default !!!!
    const avatar = Storage.get("default-header.jpg")
    const [image, setImage] = useState(avatar);
    
      useEffect(() => {
        onPageRendered();
      }, []);
    
      const onPageRendered = async () => {
        getHeaderPicture();
      };
    
      const getHeaderPicture = () => {
        Storage.get("headerPicture.png")
          .then(url => {
            var myRequest = new Request(url);
            fetch(myRequest).then(function(response) {
              if (response.status === 200) {
                setImage(url);
              } else {
                getDefaultHeaderPicture();
              }
            });
          })
          .catch(err => console.log(err));
      };

      const getDefaultHeaderPicture = () => {
        Storage.get("default-header.jpg", {
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
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="#555B6E"
      {...rest}
      {...getOverrideProps(overrides, "Canvaseditme")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="100vw"
        height="240px"
        position="center"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides)}
      ><a href="Select your profile picture">
      <input
      type="file"
      onChange={onProcessFile}
      ref={fileInput}
      hidden={true}
      />
    </a>
        <Image
          position="absolute"
          width="100vw"
          height="240px"
          top="0px"
          bottom="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          border="3px solid white"
          src={image}
          onClick={onOpenFileDialog}
          {...getOverrideProps(overrides)}
        ></Image>
        {/* <Text
          fontFamily="Helvetica"
          fontSize="40px"
          fontWeight="700"
          color="rgba(78,78,78,1)"
          lineHeight="46.875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 23px - 0px)"
          left="calc(50% - 110.5px - -0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Replace Me"
          {...getOverrideProps(overrides, "Replace Me")}
        ></Text> */}
      </View>
    </View>
  );
}
