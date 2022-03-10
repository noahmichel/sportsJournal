/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Prompt(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="267px"
      height="29.04px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Prompt")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(17,17,17,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="0.04px"
        left="16px"
        transformOrigin="top left"
        transform="rotate(-0.01deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit Question Prompt"
        {...getOverrideProps(overrides, "Edit Question Prompt")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(136,136,136,1)"
        lineHeight="21.09375px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="5px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(-0.01deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
    </View>
  );
}
