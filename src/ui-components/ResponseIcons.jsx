/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import IconShort from "./IconShort";
import IconMenu from "./IconMenu";
import { View } from "@aws-amplify/ui-react";
export default function ResponseIcons(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="20px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ResponseIcons")}
    >
      <IconShort
        position="absolute"
        top="10%"
        bottom="60%"
        left="20%"
        right="20%"
        transformOrigin="top left"
        transform="rotate(-0.01deg)"
        {...getOverrideProps(overrides, "Icon/Short")}
      ></IconShort>
      <IconMenu
        position="absolute"
        top="60%"
        bottom="10%"
        left="20%"
        right="20%"
        {...getOverrideProps(overrides, "Icon/Menu")}
      ></IconMenu>
    </View>
  );
}
