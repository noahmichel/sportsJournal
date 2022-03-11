/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import TagUnpublished from "./TagUnpublished";
export default function CardSingleLine(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="160px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSingleLine")}
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
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(17,17,17,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        height="24px"
        position="absolute"
        top="16px"
        left="6.67%"
        right="6.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CoolClub Application"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(136,136,136,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        height="17px"
        position="absolute"
        top="40px"
        left="6.67%"
        right="6.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Updated 2 days ago"
        {...getOverrideProps(overrides, "Updated 2 days ago")}
      ></Text>
      <TagUnpublished
        position="absolute"
        bottom="16px"
        left="6.67%"
        right="50.83%"
        {...getOverrideProps(overrides, "Tag/Unpublished")}
      ></TagUnpublished>
      <View {...getOverrideProps(overrides, "feather-icon / trash")}></View>
    </View>
  );
}
