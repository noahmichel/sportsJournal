/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View, Text } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";


export default function Wireframe(props) {
  const { overrides, ...rest } = props;

  
    Auth.currentAuthenticatedUser({
      bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => console.log(user))
  .catch(err => console.log(err));
  

  var userName = " ";

const getUsername = () => {
  Auth.currentSession()
    .then((data) => {
       userName = data
       return userName
    }).catch(err => console.log(err));
  }
  return (
    <View
      width="100vw"
      height="1451px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="black"
      top="-110px"
      {...rest}
      {...getOverrideProps(overrides, "Wireframe")}
    >
      <View
        width="251.65px"
        height="53.13px"
        position="absolute"
        top="141.83px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      >
        <Text
        color="white"
        children={console.log()}
        ></Text>
      </View>
      <View
        width="251.65px"
        height="31px"
        position="absolute"
        top="617.09px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 24")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="137.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="223.21px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 28")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="94.8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 25")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="180.41px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 27")}
      ></View>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="266.02px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 29")}
      ></View>
      <View
        width="306.26px"
        height="28.04px"
        position="absolute"
        top="206.77px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="290.9px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 2")}
      ></View>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="342.56px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></View>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="394.22px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 4")}
      ></View>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="445.88px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 5")}
      ></View>
      <View
        width="248.7px"
        height="237.63px"
        position="absolute"
        top="669.48px"
        left="54.95px"
        borderRadius="9.593770980834961px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 21")}
      ></View>
      <View
        width="248.7px"
        height="237.63px"
        position="absolute"
        top="920.4px"
        left="54.95px"
        borderRadius="9.593770980834961px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 22")}
      ></View>
      <View
        width="248.7px"
        height="237.63px"
        position="absolute"
        top="1171.31px"
        left="54.95px"
        borderRadius="9.593770980834961px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></View>
      <Icon
        width="660.49px"
        height="606.62px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 660.494140625,
          height: 606.62158203125,
        }}
        paths={[
          {
            d: "M0 7.37981C0 3.30405 3.30406 0 7.37982 0L653.114 0C657.19 0 660.494 3.30406 660.494 7.37982L660.494 599.242C660.494 603.318 657.19 606.622 653.114 606.622L7.37983 606.622C3.30406 606.622 0 603.317 0 599.242L0 7.37981Z",
            fill: "rgba(234,234,234,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="46.63px"
        left="378.19px"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></Icon>
      <View
        width="602.93px"
        height="82.65px"
        position="absolute"
        top="414.14px"
        left="406.97px"
        borderRadius="7.379823684692383px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <View
        width="602.93px"
        height="82.65px"
        position="absolute"
        top="520.41px"
        left="406.97px"
        borderRadius="7.379823684692383px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
        {...getOverrideProps(overrides, "Rectangle 33")}
      ></View>
      <View
        width="602.93px"
        height="222.13px"
        position="absolute"
        top="168.39px"
        left="406.97px"
        borderRadius="3.6899118423461914px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></View>
      <View
        width="62.73px"
        height="28.78px"
        position="absolute"
        top="441.45px"
        left="929.46px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></View>
      <View
        width="602.93px"
        height="64.94px"
        position="absolute"
        top="168.39px"
        left="406.97px"
        borderRadius="3.6899118423461914px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 35")}
      ></View>
      <View
        width="62.73px"
        height="28.78px"
        position="absolute"
        top="547.72px"
        left="929.46px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "Rectangle 34")}
      ></View>
      <View
        width="62.73px"
        height="28.78px"
        position="absolute"
        top="349.2px"
        left="929.46px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></View>
      <View
        width="251.65px"
        height="53.13px"
        position="absolute"
        top="76.88px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 36")}
      ></View>
      <View
        width="251.65px"
        height="32.47px"
        position="absolute"
        top="184.63px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.8)"
        {...getOverrideProps(overrides, "Rectangle 37")}
      ></View>
      <View
        width="251.65px"
        height="32.47px"
        position="absolute"
        top="439.23px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.8)"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ></View>
      <View
        width="251.65px"
        height="32.47px"
        position="absolute"
        top="545.5px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.8)"
        {...getOverrideProps(overrides, "Rectangle 39")}
      ></View>
      <View
        width="660.49px"
        height="623.6px"
        position="absolute"
        top="731.47px"
        left="378.19px"
        borderRadius="7.379823684692383px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(234,234,234,1)"
        {...getOverrideProps(overrides, "Rectangle 12")}
      ></View>
      <View
        width="604.41px"
        height="469.36px"
        position="absolute"
        top="856.19px"
        left="406.97px"
        borderRadius="7.379823684692383px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 46")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="865.05px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 47")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="910.07px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 48")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="955.08px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 49")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1000.1px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 50")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1045.12px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 40")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1090.13px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 41")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1135.15px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 42")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1180.17px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 43")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1225.18px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 44")}
      ></View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1270.2px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 45")}
      ></View>
      <View
        width="251.65px"
        height="53.13px"
        position="absolute"
        top="755.09px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 51")}
      ></View>
      <View
        width="616.22px"
        height="20.66px"
        position="absolute"
        top="825.94px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 52")}
      ></View>
    </View>
  );
}
