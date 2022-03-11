/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Structure1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="101px"
      height="45px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Structure1")}
    >
      <Flex {...getOverrideProps(overrides, "Structure")}></Flex>
    </View>
  );
}
