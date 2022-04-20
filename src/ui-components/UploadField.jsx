/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useEffect, useState} from 'react'
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import styled from 'styled-components';
import Canvaseditme from "./Canvaseditme";

const Button1 = styled.button`
  font-family: "HelveticaNeue-Light";
  width: 208px;
  height: 40px;
  cursor: pointer;
  color: black;
  border: 1px dotted black;
  font-size: 20px;
  position: relative;
  background: #3d74f5;
  border-radius: 4px;
  visibility: visible;

  transition: all 0.2s ease-in;

  &:hover {
    color: white;
    border: 1px dotted white;
   }
  
`;

export default function UploadField(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector6717: {},
        Vector6718: {},
        Vector6719: {},
        Vector6720: {},
        Group: {},
        "feather:upload-cloud": {},
        "Select a file or drag and drop here": {},
        "JPG, PNG or PDF, file size no more than 10MB": {},
        Description: {},
        "Select file": {},
        Button: {},
        "Bottom Content": {},
        UploadField: {},
      },
      variantValues: { type: "Default" },
    },
    {
      overrides: {
        Vector6717: {},
        Vector6718: {},
        Vector6719: {
          width: "44.00408935546875px",
          height: "30.775115966796875px",
          viewBox: {
            minX: 0,
            minY: 0,
            width: 44.00408935546875,
            height: 30.775115966796875,
          },
        },
        Vector6720: {},
        Group: {},
        "feather:upload-cloud": {},
        "Select a file or drag and drop here": {
          alignSelf: "stretch",
          objectFit: "cover",
        },
        "JPG, PNG or PDF, file size no more than 10MB": {
          alignSelf: "stretch",
          objectFit: "cover",
        },
        Description: { width: "252px", height: "41px" },
        "Select file": {},
        Button: { height: "37px" },
        "Bottom Content": {
          gap: "56px",
          direction: "row",
          width: "403px",
          grow: "1",
          basis: "403px",
          height: "41px",
        },
        UploadField: { direction: "row", padding: "16px 24px 16px 32px" },
      },
      variantValues: { type: "n+1" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );

  Storage.configure({ track: true, level: "private" });
  let fileInput = React.createRef();
  
  const onOpenFileDialog = () => {
    fileInput.current.click();
  };

    const [images, setImages] = useState([])
    useEffect(() => {
      fetchImages()
    }, [])
    async function fetchImages() {
      let imageKeys = await Storage.list('/images')
      imageKeys = await Promise.all(imageKeys.map(async k => {
        const signedURL = Storage.get(k.key)
        return signedURL
      }))
      setImages(imageKeys)
    }

    async function onChange(e) {
      const file = e.target.files[0]
      const result = await Storage.put('/images/' + file.name , file)
      fetchImages()
    }

  return (

  <Flex 
  direction="column"
  width="1550px"
  justifyContent="center"
  alignSelf="center"
  alignItems="center"
  position="relative"
  ><Flex
      gap="24px"
      direction="column"
      width="950px"
      justifyContent="center"
      alignSelf="center"
      alignItems="center"
      position="relative"
      border="1px dotted rgba(210,210,210,1)"
      borderRadius="11px"
      backgroundColor="rgba(196,196,196,0.8)"
      padding="12px 0px 12px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UploadField")}
    >
      <View
        width="128px"
        height="128px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "feather:upload-cloud")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="12.51%"
          bottom="12.5%"
          left="4.14%"
          right="4.18%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Image
            backgroundColor="none"
            width="128px"
            height="128px"
            src={require('./uploadImage.png')}
            position="relative"
            alignSelf="center"
            {...getOverrideProps(overrides, "Vector6717")}
          ></Image>
        </View>
      </View>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Bottom Content")}
      >
        <Flex
          gap="12px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Description")}
        >
          <Text
            fontFamily="HelveticaNeue"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="15.234375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Select a file or drag and drop here"
            {...getOverrideProps(
              overrides,
              "Select a file or drag and drop here"
            )}
          ></Text>
          <Text
            fontFamily="HelveticaNeue-Light"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,0.4)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="JPG or PNG, file size no more than 10MB"
            {...getOverrideProps(
              overrides,
              "JPG, PNG or PDF, file size no more than 10MB"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Button")}
        >
          <a><input
        type="file"
        onChange={onChange}
        ref={fileInput}
        hidden={true}
          /></a>
          <Button1
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            onClick={onOpenFileDialog}
            children="Select file"
            {...getOverrideProps(overrides, "Select file")}
          ></Button1>
        </Flex>
      </Flex>
    </Flex>
    <Flex
    width="1000px"
    justifyContent="center"
    alignSelf="center"
    alignItems="center"
    position="relative"
    ><Text
      color="white"
      fontFamily="HelveticaNeue"
      fontSize="24px"
      fontWeight="500"
      lineHeight="24px"
      padding="24px 0px 0px 0px"
      children="Gallery"
      />
    </Flex>
    <Flex
    direction="row"
    width="1200px"
    justifyContent="center"
    alignSelf="center"
    alignItems="flex-start"
    position="relative"
    wrap="wrap"
    >
    {
      images.map(image => (
        <Image 
        border="1px solid white"
        borderRadius="2px"
        src={image} 
        key={image} 
        style={{width: 200, height: 200, marginBottom: 10}} />
      ))
    }
    </Flex>
  </Flex>
  );
}
