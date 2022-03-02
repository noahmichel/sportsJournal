/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Mdiradiobuttonblankhoverunselected(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="28px"
      height="28px"
      overflow="hidden"
      position="relative"
      borderRadius="3px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="20px"
        height="20px"
        pathData="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
        position="absolute"
        top="14.285569531576975%"
        bottom="14.285859039851598%"
        left="14.28600549697876%"
        right="14.285423074449813%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        width="28px"
        height="28px"
        pathData=""
        viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
