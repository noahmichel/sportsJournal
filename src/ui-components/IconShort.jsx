/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconShort(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="12px"
      height="12px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
      paths={[
        {
          d: "M8.91489 0L0.0851064 0L0 2.49307L0.496454 2.49307C0.765957 0.927978 1.28369 0.685596 3.29078 0.623269L3.7305 0.609418L3.7305 8.53878C3.7305 9.21053 3.58156 9.36981 2.38298 9.47368L2.38298 10L6.61702 10L6.61702 9.47368C5.41135 9.36981 5.26241 9.21053 5.26241 8.53878L5.26241 0.609418L5.70922 0.623269C7.71631 0.685596 8.23404 0.927978 8.50355 2.49307L9 2.49307L8.91489 0Z",
          fill: "rgba(17,17,17,1)",
          fillRule: "nonzero",
          style: { transform: "translate(1.5px, 1px)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconShort")}
    ></Icon>
  );
}
