/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function MobileHeader(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="375px"
      height="50px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="30px"
        height="18px"
        position="absolute"
        top="20px"
        left="327px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Icon
          width="30px"
          height="0px"
          pathData="M0 0.8L30 0.8L30 -0.8L0 -0.8L0 0.8Z"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 0 }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="0px"
          right="0px"
          {...getOverrideProps(overrides, "View.View[0].Icon[0]")}
        ></Icon>
        <Icon
          width="30px"
          height="0px"
          pathData="M0 0.8L30 0.8L30 -0.8L0 -0.8L0 0.8Z"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 0 }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="9px"
          right="0px"
          {...getOverrideProps(overrides, "View.View[0].Icon[1]")}
        ></Icon>
        <Icon
          width="30px"
          height="0px"
          pathData="M0 0.8L30 0.8L30 -0.8L0 -0.8L0 0.8Z"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 0 }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="18px"
          right="0px"
          {...getOverrideProps(overrides, "View.View[0].Icon[2]")}
        ></Icon>
      </View>
    </View>
  );
}
