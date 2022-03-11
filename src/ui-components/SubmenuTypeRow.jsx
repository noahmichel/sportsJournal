/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import IconShort from "./IconShort";
export default function SubmenuTypeRow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="55px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SubmenuTypeRow")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(17,17,17,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="35px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Short"
        {...getOverrideProps(overrides, "Short")}
      ></Text>
      <IconShort
        position="absolute"
        top="25%"
        bottom="25%"
        left="0px"
        {...getOverrideProps(overrides, "Icon/Short")}
      ></IconShort>
    </View>
  );
}
