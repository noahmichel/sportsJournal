/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Prompt from "./Prompt";
import IconMenu from "./IconMenu";
import { View } from "@aws-amplify/ui-react";
import InputText from "./InputText";
export default function Short(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="524px"
      height="77.07px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Short")}
    >
      <Prompt
        position="absolute"
        top="0px"
        left="-16px"
        {...getOverrideProps(overrides, "Prompt")}
      ></Prompt>
      <View
        width="20px"
        height="40px"
        position="absolute"
        top="37px"
        left="-24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Response Icons")}
      >
        <IconMenu
          position="absolute"
          top="60%"
          bottom="10%"
          left="20%"
          right="20%"
          {...getOverrideProps(overrides, "Icon/Menu")}
        ></IconMenu>
      </View>
      <InputText
        height="40px"
        position="absolute"
        top="37px"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Input/Text")}
      ></InputText>
    </View>
  );
}
