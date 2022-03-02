/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Label from "./Label";
import { Flex } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="6px"
      padding="4px 16px 4px 16px"
      backgroundColor="rgba(0,72.00000330805779,217.0000022649765,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Label
        display="flex"
        shrink="0"
        width="50px"
        {...getOverrideProps(overrides, "Flex.Label[0]")}
      ></Label>
    </Flex>
  );
}
