/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Canvaseditme(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1680px"
      height="240px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Canvaseditme")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1680px"
        height="240px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Placeholder")}
      >
        <View
          position="absolute"
          top="0px"
          bottom="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Text
          fontFamily="Helvetica"
          fontSize="40px"
          fontWeight="700"
          color="rgba(78,78,78,1)"
          lineHeight="46.875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 23px - 0px)"
          left="calc(50% - 110.5px - -0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Replace Me"
          {...getOverrideProps(overrides, "Replace Me")}
        ></Text>
      </View>
    </View>
  );
}
