/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1152px"
      height="182px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Icon
        width="30px"
        height="30px"
        pathData="M25.6055 0L4.39453 0C1.97159 0 0 1.97159 0 4.39453L0 25.6055C0 28.0284 1.97159 30 4.39453 30L13.2422 30L13.2422 19.3945L9.72656 19.3945L9.72656 14.1211L13.2422 14.1211L13.2422 10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344L23.8477 5.27344L23.8477 10.5469L18.5156 10.5469L18.5156 14.1211L23.8477 14.1211L22.9688 19.3945L18.5156 19.3945L18.5156 30L25.6055 30C28.0284 30 30 28.0284 30 25.6055L30 4.39453C30 1.97159 28.0284 0 25.6055 0Z"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
        color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
        position="absolute"
        top="calc(50% - 15px - 25px)"
        left="calc(50% - 15px - 102px)"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Icon
        width="30px"
        height="30px"
        pathData="M25.6055 0L4.39453 0C1.97159 0 0 1.97159 0 4.39453L0 25.6055C0 28.0284 1.97159 30 4.39453 30L25.6055 30C28.0284 30 30 28.0284 30 25.6055L30 4.39453C30 1.97159 28.0284 0 25.6055 0ZM10.6055 23.7891L7.08984 23.7891L7.08984 11.4844L10.6055 11.4844L10.6055 23.7891ZM10.6055 9.72656L7.08984 9.72656L7.08984 6.21094L10.6055 6.21094L10.6055 9.72656ZM22.9102 23.7891L19.3945 23.7891L19.3945 16.7578C19.3945 15.7887 18.6058 15 17.6367 15C16.6676 15 15.8789 15.7887 15.8789 16.7578L15.8789 23.7891L12.3633 23.7891L12.3633 11.4844L15.8789 11.4844L15.8789 12.147C16.7999 11.8607 17.3982 11.4844 18.5156 11.4844C20.8999 11.4869 22.9102 13.6258 22.9102 16.1536L22.9102 23.7891Z"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
        color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
        position="absolute"
        top="calc(50% - 15px - 25px)"
        left="calc(50% - 15px - -100px)"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="28.021978021978022%"
        bottom="55.494505494505496%"
        left="51.12847222222222%"
        right="45.66639959812164%"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.View[1].View[0]")}
        >
          <Icon
            width="36.92307662963867px"
            height="30px"
            pathData="M36.9231 3.55154C35.55 4.15385 34.0869 4.55308 32.5615 4.74692C34.1308 3.81 35.3285 2.33769 35.8915 0.563077C34.4285 1.43538 32.8131 2.05154 31.0915 2.39538C29.7023 0.916154 27.7223 0 25.5623 0C21.3715 0 17.9977 3.40154 17.9977 7.57154C17.9977 8.17154 18.0485 8.74846 18.1731 9.29769C11.88 8.99077 6.31154 5.97462 2.57077 1.38C1.91769 2.51308 1.53462 3.81 1.53462 5.20615C1.53462 7.82769 2.88462 10.1515 4.89692 11.4969C3.68077 11.4738 2.48769 11.1208 1.47692 10.5646C1.47692 10.5877 1.47692 10.6177 1.47692 10.6477C1.47692 14.3262 4.10077 17.3815 7.54154 18.0854C6.92538 18.2538 6.25385 18.3346 5.55692 18.3346C5.07231 18.3346 4.58308 18.3069 4.12385 18.2054C5.10462 21.2031 7.88769 23.4069 11.1969 23.4785C8.62154 25.4931 5.35154 26.7069 1.81154 26.7069C1.19077 26.7069 0.595385 26.6792 0 26.6031C3.35308 28.7654 7.32692 30 11.6123 30C25.5415 30 33.1569 18.4615 33.1569 8.46C33.1569 8.12538 33.1454 7.80231 33.1292 7.48154C34.6315 6.41538 35.8938 5.08385 36.9231 3.55154Z"
            viewBox={{ minX: 0, minY: 0, width: 36.923095703125, height: 30 }}
            color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
            position="absolute"
            top="calc(50% - 15px - 0px)"
            left="calc(50% - 18.461538314819336px - 0px)"
            {...getOverrideProps(overrides, "View.View[1].View[0].Icon[0]")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="28.021978021978022%"
        bottom="55.494505494505496%"
        left="45.48611111111111%"
        right="51.90972222222222%"
        {...getOverrideProps(overrides, "View.View[2]")}
      >
        <Icon
          width="30px"
          height="30px"
          pathData="M21.7209 0L8.27874 0C3.71384 0 0 3.71402 0 8.27892L0 21.7211C0 26.2862 3.71384 30 8.27874 30L21.7209 30C26.2862 30 30 26.286 30 21.7211L30 8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383L8.27874 27.3383C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211L2.66175 8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175L21.7209 2.66175C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892L27.3383 21.7211L27.3384 21.7211Z"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="calc(50% - 15px - 0px)"
          left="calc(50% - 15px - 0px)"
          {...getOverrideProps(overrides, "View.View[2].Icon[0]")}
        ></Icon>
        <Icon
          width="15.460481643676758px"
          height="15.460124969482422px"
          pathData="M7.73024 0C3.46772 0 0 3.46772 0 7.73024C0 11.9926 3.46772 15.4601 7.73024 15.4601C11.9928 15.4601 15.4605 11.9926 15.4605 7.73024C15.4605 3.46772 11.9928 0 7.73024 0ZM7.73024 12.7982C4.93559 12.7982 2.66175 10.5247 2.66175 7.73006C2.66175 4.93523 4.93541 2.66157 7.73024 2.66157C10.5251 2.66157 12.7987 4.93523 12.7987 7.73006C12.7987 10.5247 10.5249 12.7982 7.73024 12.7982Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.46044921875,
            height: 15.460205078125,
          }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="calc(50% - 7.730062484741211px - -0.00021648406982421875px)"
          left="calc(50% - 7.730240821838379px - 0.0000171661376953125px)"
          {...getOverrideProps(overrides, "View.View[2].Icon[1]")}
        ></Icon>
        <Icon
          width="3.903893232345581px"
          height="3.903893232345581px"
          pathData="M1.95195 0C1.43912 0 0.935338 0.207616 0.573163 0.571388C0.209214 0.933386 0 1.43734 0 1.95195C0 2.46495 0.209391 2.96873 0.573163 3.3325C0.93516 3.6945 1.43912 3.90389 1.95195 3.90389C2.46655 3.90389 2.96873 3.6945 3.33251 3.3325C3.69628 2.96873 3.90389 2.46478 3.90389 1.95195C3.90389 1.43734 3.69628 0.933386 3.33251 0.571388C2.97051 0.207616 2.46655 0 1.95195 0Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 3.9039306640625,
            height: 3.90380859375,
          }}
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          position="absolute"
          top="calc(50% - 1.9519466161727905px - 8.034870743751526px)"
          left="calc(50% - 1.9519466161727905px - -8.054426550865173px)"
          {...getOverrideProps(overrides, "View.View[2].Icon[2]")}
        ></Icon>
      </View>
      <Text
        fontFamily="Heebo"
        fontSize="14px"
        fontWeight="400"
        color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
        lineHeight="16.40625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="calc(50% - 10.5px - -26.5px)"
        left="40.27777777777778%"
        right="40.45138888888889%"
        padding="0px 0px 0px 0px"
        children="Copyright ©2020 All rights reserved "
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
