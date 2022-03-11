/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function IconLong(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="12px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "IconLong")}
    >
      <View
        width="7px"
        height="2px"
        position="absolute"
        top="2px"
        left="2px"
        borderRadius="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,17,17,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <View
        width="9px"
        height="2px"
        position="absolute"
        top="5px"
        left="2px"
        borderRadius="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,17,17,1)"
        {...getOverrideProps(overrides, "Rectangle 6.1")}
      ></View>
      <View
        width="7px"
        height="2px"
        position="absolute"
        top="8px"
        left="2px"
        borderRadius="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(17,17,17,1)"
        {...getOverrideProps(overrides, "Rectangle 6.2")}
      ></View>
    </View>
  );
}
