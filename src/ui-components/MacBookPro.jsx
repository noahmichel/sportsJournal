/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ProfileBannerdesktop from "./ProfileBannerdesktop";
import { Text, View } from "@aws-amplify/ui-react";
export default function MacBookPro(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="900px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MacBookPro")}
    >
      <ProfileBannerdesktop
        width="1230px"
        position="absolute"
        top="0px"
        left="210px"
        {...getOverrideProps(overrides, "Profile Banner - desktop")}
      ></ProfileBannerdesktop>
      <View
        padding="0px 0px 0px 0px"
        width="209px"
        height="900px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Sidebar placeholder")}
      >
        <View
          width="209px"
          height="900px"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 0px 0px rgba(0.8980392217636108, 0.8980392217636108, 0.8980392217636108, 1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(254,254,254,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <Text
          fontFamily="Helvetica"
          fontSize="26px"
          fontWeight="700"
          color="rgba(15,15,15,1)"
          lineHeight="30.46875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 15px - 339px)"
          left="27.27%"
          right="26.79%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sidebar"
          {...getOverrideProps(overrides, "Sidebar")}
        ></Text>
      </View>
    </View>
  );
}
