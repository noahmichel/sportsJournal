/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function InputText(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="430.01px"
      height="40.07px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "InputText")}
    >
      <View
        position="absolute"
        top="0.16%"
        bottom="0%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(-0.01deg)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(240,240,240,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(17,17,17,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="9px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit placeholder text"
        {...getOverrideProps(overrides, "Edit placeholder text")}
      ></Text>
    </View>
  );
}
