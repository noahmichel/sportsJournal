/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function InputOptionAdd(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="138px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "InputOptionAdd")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(204,204,204,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 5.2")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="center"
        width="94px"
        position="absolute"
        top="0%"
        bottom="0%"
        right="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add option"
        {...getOverrideProps(overrides, "Add option")}
      ></Text>
      <View {...getOverrideProps(overrides, "feather-icon / plus")}></View>
    </View>
  );
}
