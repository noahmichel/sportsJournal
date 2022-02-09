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
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Text[0]": {
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "700",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          lineHeight: "20px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          letterSpacing: "0.49px",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children: "LOREM IPSUM",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          fontFamily: "Inter",
          fontSize: "40px",
          fontWeight: "700",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          lineHeight: "48px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children: "Ut enim ad minim veniam quis nostrud",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[1]": {
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "400",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          lineHeight: "24px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          letterSpacing: "0.010000000000000009px",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {
          gap: "16px",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        "Flex.Flex[0].Flex[0].Button[0]": {
          display: "flex",
          shrink: "0",
          width: "206px",
          size: "large",
          variation: "primary",
          children: "Primary Button",
        },
        "Flex.Flex[0].Flex[0]": {
          gap: "24px",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        "Flex.Flex[0]": {
          gap: "10px",
          direction: "column",
          height: "564px",
          justifyContent: "center",
          alignItems: "center",
          grow: "1",
          basis: "720px",
          alignSelf: "stretch",
          overflow: "hidden",
          position: "relative",
          padding: "120px 120px 120px 120px",
          backgroundColor: "rgba(255,255,255,1)",
        },
        "Flex.Flex[1].Image[0]": {
          width: "720px",
          height: "564px",
          grow: "1",
          basis: "564px",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        "Flex.Flex[1]": {
          gap: "10px",
          direction: "column",
          height: "564px",
          justifyContent: "center",
          alignItems: "center",
          grow: "1",
          basis: "720px",
          alignSelf: "stretch",
          overflow: "hidden",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        Flex: {
          gap: "0",
          direction: "row",
          width: "1440px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Text[0]": {
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "700",
          color: "rgba(255,255,255,1)",
          lineHeight: "20px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          letterSpacing: "0.49px",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children: "LOREM IPSUM",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          fontFamily: "Inter",
          fontSize: "40px",
          fontWeight: "700",
          color: "rgba(255,255,255,1)",
          lineHeight: "48px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children: "Ut enim ad minim veniam quis nostrud",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[1]": {
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "400",
          color: "rgba(255,255,255,1)",
          lineHeight: "24px",
          textAlign: "center",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          letterSpacing: "0.010000000000000009px",
          width: "480px",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
          children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {
          gap: "16px",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        "Flex.Flex[0].Flex[0].Button[0]": {
          display: "flex",
          shrink: "0",
          width: "206px",
          size: "large",
          variation: "primary",
          children: "Primary Button",
        },
        "Flex.Flex[0].Flex[0]": {
          gap: "24px",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          shrink: "0",
          alignSelf: "stretch",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        "Flex.Flex[0]": {
          gap: "10px",
          direction: "column",
          height: "564px",
          justifyContent: "center",
          alignItems: "center",
          grow: "1",
          basis: "720px",
          alignSelf: "stretch",
          overflow: "hidden",
          position: "relative",
          padding: "120px 120px 120px 120px",
          backgroundColor: "rgba(0,0,0,1)",
        },
        "Flex.Flex[1].Image[0]": {
          width: "720px",
          height: "564px",
          grow: "1",
          basis: "564px",
          position: "relative",
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
        },
        "Flex.Flex[1]": {
          gap: "10px",
          direction: "column",
          height: "564px",
          justifyContent: "center",
          alignItems: "center",
          grow: "1",
          basis: "720px",
          alignSelf: "stretch",
          overflow: "hidden",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
        Flex: {
          gap: "0",
          direction: "row",
          width: "1440px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "0px 0px 0px 0px",
        },
      },
      variantValues: { mode: "Dark" },
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
    <Flex
      gap="0"
      direction="row"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="10px"
        direction="column"
        height="620px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="black"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="white"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            width="480px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children="RACERX SPORTS JOURNAL"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="700"
              color="white"
              lineHeight="48px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="480px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Become 42% more likely to achieve your goals and dreams"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="white"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="480px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Journaling is a powerful peak performance habit that helps you to gain clarity, become more focused and productive, reflect on your actions and progress"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Button
            backgroundColor="#3d74f5"
            //color="#3d74f5"
            display="flex"
            shrink="0"
            width="300px"
            size="large"
            variation="primary"
            children="Start Now"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        height="620px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          borderRadius="720px"
          width="720px"
          height="720px"
          grow="1"
          basis="620px"
          position="relative"
          padding="0px 0px 0px 0px"
          src={require('./aaronJudge.jpg')}
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
