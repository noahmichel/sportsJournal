/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function CardAddform(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="160px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardAddform")}
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
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(136,136,136,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="68px"
        left="30.42%"
        right="20.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create a form"
        {...getOverrideProps(overrides, "Create a form")}
      ></Text>
      <View {...getOverrideProps(overrides, "feather-icon / plus")}></View>
    </View>
  );
}
