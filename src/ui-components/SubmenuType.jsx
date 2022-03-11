/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import SubmenuTypeRow from "./SubmenuTypeRow";
export default function SubmenuType(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="71px"
      height="104px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SubmenuType")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 2px 20px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <View
        position="absolute"
        top="3.85%"
        bottom="73.08%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(240,240,240,1)"
        {...getOverrideProps(overrides, "Enforce Hover")}
      ></View>
      <SubmenuTypeRow
        position="absolute"
        top="3.85%"
        bottom="73.08%"
        left="11.27%"
        right="11.27%"
        {...getOverrideProps(overrides, "Submenu/Type/Rowxyc")}
      ></SubmenuTypeRow>
      <SubmenuTypeRow
        position="absolute"
        top="26.92%"
        bottom="50%"
        left="11.27%"
        right="11.27%"
        {...getOverrideProps(overrides, "Submenu/Type/Rowsgz")}
      ></SubmenuTypeRow>
      <SubmenuTypeRow
        position="absolute"
        top="50%"
        bottom="26.92%"
        left="11.27%"
        right="11.27%"
        {...getOverrideProps(overrides, "Submenu/Type/Rowvbo")}
      ></SubmenuTypeRow>
      <SubmenuTypeRow
        position="absolute"
        top="73.08%"
        bottom="3.85%"
        left="11.27%"
        right="11.27%"
        {...getOverrideProps(overrides, "Submenu/Type/Rowzqr")}
      ></SubmenuTypeRow>
    </View>
  );
}
