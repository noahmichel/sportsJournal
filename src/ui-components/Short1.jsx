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
import Feathericontype from "./Feathericontype";
import { View } from "@aws-amplify/ui-react";
import InputText from "./InputText";
import Feathericoncheck from "./Feathericoncheck";
export default function Short1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="493px"
      height="77px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Short1")}
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
        <Feathericontype
          width="11px"
          height="11px"
          position="absolute"
          top="calc(50% - 5.5px - 11.5px)"
          left="calc(50% - 5.5px - 0.5px)"
          {...getOverrideProps(overrides, "feather-icon / type")}
        ></Feathericontype>
      </View>
      <InputText
        height="40px"
        position="absolute"
        top="37px"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Input/Text")}
      ></InputText>
      <Feathericoncheck
        width="36px"
        height="36px"
        position="absolute"
        top="calc(50% - 18px - -18.5px)"
        left="calc(50% - 18px - -264.5px)"
        {...getOverrideProps(overrides, "feather-icon / check")}
      ></Feathericoncheck>
    </View>
  );
}
