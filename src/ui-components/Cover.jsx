/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Cover(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="596px"
      height="335px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(51.00000075995922,51.00000075995922,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="503px"
        height="503px"
        position="absolute"
        top="-84px"
        left="-324px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <View
          position="absolute"
          top="1.7037124330433413%"
          bottom="27.520939654431807%"
          left="62.940939567672096%"
          right="-33.71629354730989%"
          transformOrigin="top left"
          transform="rotate(60.00000251226675deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,252.4999925494194,229.49999392032623,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <View
          position="absolute"
          top="0%"
          bottom="29.22465208747515%"
          left="50%"
          right="-20.77534791252485%"
          transformOrigin="top left"
          transform="rotate(45deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,250.00000029802322,203.99998784065247,1)"
          {...getOverrideProps(overrides, "View.View[0].View[1]")}
        ></View>
        <View
          position="absolute"
          top="1.7037018155956838%"
          bottom="27.52094420476652%"
          left="37.05903009676317%"
          right="-7.834371942175075%"
          transformOrigin="top left"
          transform="rotate(30.00000636040908deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(254.99998480081558,245.00000059604645,153.00002127885818,1)"
          {...getOverrideProps(overrides, "View.View[0].View[2]")}
        ></View>
        <View
          position="absolute"
          top="6.698673619901683%"
          bottom="22.525978467573466%"
          left="24.999996966443526%"
          right="4.224655121031623%"
          transformOrigin="top left"
          transform="rotate(15.000003418783907deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,240.00000089406967,101.99999392032623,1)"
          {...getOverrideProps(overrides, "View.View[0].View[3]")}
        ></View>
      </View>
      <Text
        fontFamily="Airbnb Cereal App"
        fontSize="48px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="53.76000213623047px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="365px"
        position="absolute"
        top="calc(50% - 81px - 0px)"
        left="calc(50% - 182.5px - -93.5px)"
        padding="0px 0px 0px 0px"
        children="Form &#xA;Builder &#xA;Components"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
