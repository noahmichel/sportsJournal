/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Switch(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.Icon[0]": {
          color:
            "rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)",
        },
        "View.Icon[1]": {
          left: "43.13725490196079%",
          right: "3.9215686274509802%",
        },
        View: {},
      },
      variantValues: { type: "Enabled", state1: "Selected", state2: "On" },
    },
    {
      overrides: { "View.Icon[0]": {}, "View.Icon[1]": {}, View: {} },
      variantValues: { type: "Enabled", state1: "Unselected", state2: "Off" },
    },
    {
      overrides: {
        "View.Icon[0]": {
          color:
            "rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)",
        },
        "View.Icon[1]": {
          left: "43.13725490196079%",
          right: "3.9215686274509802%",
        },
        View: { opacity: "0.4000000059604645" },
      },
      variantValues: { type: "Disabled", state1: "Selected", state2: "On" },
    },
    {
      overrides: {
        "View.Icon[0]": {},
        "View.Icon[1]": {},
        View: { opacity: "0.4000000059604645" },
      },
      variantValues: { type: "Disabled", state1: "Unselected", state2: "Off" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="51px"
      height="31.000152587890625px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="51px"
        height="31.0001220703125px"
        pathData="M15.857 0.0921522C17.597 -0.0078478 19.335 0.0001522 21.075 0.0001522C21.087 0.0001522 29.892 0.0001522 29.892 0.0001522C31.666 0.0001522 33.404 -0.0078478 35.143 0.0921522C36.724 0.182152 38.264 0.374152 39.797 0.803152C43.024 1.70515 45.842 3.58915 47.879 6.26015C49.904 8.91415 51 12.1632 51 15.4992C51 18.8392 49.904 22.0862 47.879 24.7402C45.842 27.4102 43.024 29.2952 39.797 30.1972C38.264 30.6262 36.724 30.8172 35.143 30.9082C33.404 31.0082 31.666 30.9992 29.926 30.9992C29.914 30.9992 21.107 31.0002 21.107 31.0002C19.335 30.9992 17.597 31.0082 15.857 30.9082C14.277 30.8172 12.737 30.6262 11.204 30.1972C7.977 29.2952 5.159 27.4102 3.122 24.7402C1.097 22.0862 0 18.8392 0 15.5002C0 12.1632 1.097 8.91415 3.122 6.26015C5.159 3.58915 7.977 1.70515 11.204 0.803152C12.737 0.374152 14.277 0.182152 15.857 0.0921522Z"
        viewBox={{ minX: 0, minY: 0, width: 51, height: 31.0001220703125 }}
        color="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        width="27px"
        height="27px"
        pathData="M13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z"
        viewBox={{ minX: 0, minY: 0, width: 27, height: 27 }}
        color="rgba(255,255,255,1)"
        position="absolute"
        top="6.4515811473174685%"
        bottom="6.452073363896702%"
        left="3.9215686274509802%"
        right="43.13725490196079%"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
