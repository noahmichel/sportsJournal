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
export default function ProfileHome(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="100vw"
      height="350px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="black"
      {...rest}
      {...getOverrideProps(overrides, "MacBookPro")}
    >
      <ProfileBannerdesktop
        width="100vw"
        position="absolute"
        top="0px"
        {...getOverrideProps(overrides, "Profile Banner - desktop")}
      ></ProfileBannerdesktop>
      </View>
    
  );
}
