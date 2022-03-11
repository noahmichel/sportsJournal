/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function IconSingle(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="12px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "IconSingle")}
    >
      <View
        width="10px"
        height="10px"
        position="absolute"
        top="1px"
        left="1px"
        border="1.5px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
    </View>
  );
}
