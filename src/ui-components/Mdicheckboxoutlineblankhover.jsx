/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
import Mdicheckboxoutlineblank from "./Mdicheckboxoutlineblank";
export default function Mdicheckboxoutlineblankhover(props) {
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
        width="28px"
        height="28px"
        pathData=""
        viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Mdicheckboxoutlineblank
        position="absolute"
        top="7.142857142857142%"
        bottom="7.142857142857142%"
        left="7.142857142857142%"
        right="7.142857142857142%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdicheckboxoutlineblank[0]")}
      >
        <Icon
          width="18px"
          height="18px"
          pathData="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[0].Icon[1]"
          )}
        ></Icon>
      </Mdicheckboxoutlineblank>
    </View>
  );
}
