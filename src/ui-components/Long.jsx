/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Prompt from "./Prompt";
import ResponseIcons from "./ResponseIcons";
import InputText from "./InputText";
import { View } from "@aws-amplify/ui-react";
export default function Long(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="524px"
      height="137px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Long")}
    >
      <Prompt
        position="absolute"
        top="0px"
        left="-16px"
        {...getOverrideProps(overrides, "Prompt")}
      ></Prompt>
      <ResponseIcons
        position="absolute"
        top="37px"
        left="-24px"
        {...getOverrideProps(overrides, "Response Icons")}
      ></ResponseIcons>
      <InputText
        height="100px"
        position="absolute"
        top="37px"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Input/Text")}
      ></InputText>
    </View>
  );
}
