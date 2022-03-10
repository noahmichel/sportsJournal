/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Canvaseditme from "./Canvaseditme";
import { Text, View } from "@aws-amplify/ui-react";
export default function ProfileBannermobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="814px"
      height="120px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileBannermobile")}
    >
      <Canvaseditme
        width="814px"
        height="120px"
        position="absolute"
        top="calc(50% - 60px - 0px)"
        left="calc(50% - 407px - 0px)"
        {...getOverrideProps(overrides, "Canvas [edit me]")}
      ></Canvaseditme>
      <View
        width="247px"
        height="120px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <View
          height="120px"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,225,225,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Crop zone leftxun")}
        ></View>
      </View>
      <View
        width="248px"
        height="120px"
        position="absolute"
        top="0px"
        right="-1px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <View
          height="120px"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,225,225,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Crop zone leftdjv")}
        ></View>
      </View>
      <View
        width="320px"
        height="120px"
        position="absolute"
        top="0px"
        left="calc(50% - 160px - 0px)"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Safe zone")}
      >
        <View
          height="120px"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(232,255,221,1)"
          opacity="0.6000000238418579"
          {...getOverrideProps(overrides, "Safe zone overlay")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="178px"
          height="105px"
          position="absolute"
          top="8px"
          left="70px"
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
            top="calc(50% - 26px - 26.5px)"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Profile Banner&#xA;814 x 120"
            {...getOverrideProps(overrides, "Profile Banner 814 x 120")}
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
            top="calc(50% - 21.5px - -31px)"
            left="19.66%"
            right="20.79%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Safe Zone&#xA;320 x 120"
            {...getOverrideProps(overrides, "Safe Zone 320 x 120")}
          ></Text>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="128px"
        height="128px"
        position="absolute"
        top="24px"
        left="26px"
        {...getOverrideProps(overrides, "Profile picture")}
      >
        <View
          width="128px"
          height="128px"
          position="absolute"
          top="0px"
          left="0px"
          border="4px SOLID rgba(255,255,255,1)"
          borderRadius="64px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,225,225,1)"
          {...getOverrideProps(overrides, "Total overlay")}
        ></View>
      </View>
    </View>
  );
}
