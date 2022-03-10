/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function AdvancedJournal(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1350px"
      height="1304px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AdvancedJournal")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <View
        position="absolute"
        top="24.23%"
        bottom="72.09%"
        left="4.22%"
        right="68.59%"
        border="1px SOLID rgba(255,255,255,1)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Input BG")}
      ></View>
      <Text
        fontFamily="Helvetica Neue"
        fontSize="22px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25.78125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.29px"
        position="absolute"
        top="20.4%"
        bottom="77.53%"
        left="4.22%"
        right="88.3%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Opponent"
        {...getOverrideProps(overrides, "Opponent")}
      ></Text>
      <Text
        fontFamily="Helvetica Neue"
        fontSize="22px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25.78125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="-0.29px"
        position="absolute"
        top="13.8%"
        bottom="84.13%"
        left="4.44%"
        right="91.56%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date:"
        {...getOverrideProps(overrides, "Date:")}
      ></Text>
      <View
        position="absolute"
        top="13.65%"
        bottom="83.74%"
        left="10.89%"
        right="73.78%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Helvetica Neue"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-end"
        position="absolute"
        top="30.37%"
        bottom="67.56%"
        left="4.44%"
        right="72.52%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How did you feel today?"
        {...getOverrideProps(overrides, "How did you feel today?")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="34.66%"
        bottom="62.88%"
        left="4.44%"
        right="70.15%"
        {...getOverrideProps(overrides, "3 Options / Left Selectedkza")}
      >
        <View
          {...getOverrideProps(overrides, "3 Options / Left Selectedvub")}
        ></View>
      </View>
      <View
        position="absolute"
        top="2.38%"
        bottom="88.73%"
        left="4.22%"
        right="68.52%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,248,248,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Helvetica Neue"
          fontSize="12px"
          fontWeight="400"
          color="rgba(102,102,102,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 7px - 19px)"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Today’s"
          {...getOverrideProps(overrides, "Today\u2019s")}
        ></Text>
        <Text
          fontFamily="Helvetica Neue"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="calc(50% - 14.5px - -11.5px)"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Analytics and Data"
          {...getOverrideProps(overrides, "Analytics and Data")}
        ></Text>
      </View>
    </View>
  );
}
