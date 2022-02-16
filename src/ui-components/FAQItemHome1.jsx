/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function FAQItemHome1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      width="100vw"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="black"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="1232px"
          grow="1"
          basis="1232px"
          height="88px"
          position="relative"
          padding="0px 100px 0px 100px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="HelveticaNeue"
            fontSize="32px"
            fontWeight="500"
            color="white"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="100vw"
            shrink="0"
            alignSelf="center"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Professional Testimonials"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            fontFamily="HelveticaNeue-Light"
            fontSize="20px"
            fontWeight="300"
            color="white"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.010000000000000009px"
            width="100vw"
            shrink="0"
            alignSelf="center"
            position="relative"
            padding="0px 100px 0px 100px"
            children="See what professionals are saying about RACERX Baseball Journal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
