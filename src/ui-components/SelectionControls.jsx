/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import Mdiradiobuttonunchecked from "./Mdiradiobuttonunchecked";
import Mdiradiobuttonblankhoverunselected from "./Mdiradiobuttonblankhoverunselected";
import Mdiradiobuttondisabledunselected from "./Mdiradiobuttondisabledunselected";
import Mdiradiobuttonchecked from "./Mdiradiobuttonchecked";
import Mdiradiobuttonhover from "./Mdiradiobuttonhover";
import Mdiradiobuttondisabled from "./Mdiradiobuttondisabled";
import Mdicheckbox from "./Mdicheckbox";
import Mdicheckboxoutlineblank from "./Mdicheckboxoutlineblank";
import Mdicheckboxhover from "./Mdicheckboxhover";
import Mdicheckboxoutlineblankhover from "./Mdicheckboxoutlineblankhover";
export default function SelectionControls(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1060px"
      height="898px"
      position="relative"
      border="1px SOLID rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
      borderRadius="16px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="32px"
        fontWeight="600"
        color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
        lineHeight="42px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0px"
        position="absolute"
        top="60px"
        left="444px"
        padding="0px 0px 0px 0px"
        children="Radio Button"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="124px"
        left="445px"
        padding="0px 0px 0px 0px"
        children="Elements"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="222px"
        left="444px"
        padding="0px 0px 0px 0px"
        children="Enabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="682px"
        left="446px"
        padding="0px 0px 0px 0px"
        children="Hover Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[3]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="594px"
        left="446px"
        padding="0px 0px 0px 0px"
        children="Disabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[4]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="326px"
        left="447px"
        padding="0px 0px 0px 0px"
        children="Enabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[5]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="502px"
        left="447px"
        padding="0px 0px 0px 0px"
        children="Hover Selected / On"
        {...getOverrideProps(overrides, "View.Text[6]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="414px"
        left="447px"
        padding="0px 0px 0px 0px"
        children="Disabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[7]")}
      ></Text>
      <Mdiradiobuttonunchecked
        width="24px"
        height="24px"
        position="absolute"
        top="164px"
        left="444px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdiradiobuttonunchecked[0]")}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="8.333333333333332%"
          bottom="8.333333333333332%"
          left="8.333333333333332%"
          right="8.333333333333332%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonunchecked[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonunchecked[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttonunchecked>
      <Mdiradiobuttonblankhoverunselected
        width="28px"
        height="28px"
        position="absolute"
        top="162px"
        left="648px"
        overflow="hidden"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
        {...getOverrideProps(
          overrides,
          "View.Mdiradiobuttonblankhoverunselected[0]"
        )}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="14.285569531576975%"
          bottom="14.285859039851598%"
          left="14.28600549697876%"
          right="14.285423074449813%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonblankhoverunselected[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="28px"
          height="28px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonblankhoverunselected[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttonblankhoverunselected>
      <Mdiradiobuttondisabledunselected
        width="24px"
        height="24px"
        position="absolute"
        top="164px"
        left="608px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "View.Mdiradiobuttondisabledunselected[0]"
        )}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(184.00000423192978,188.0000039935112,202.00000315904617,1)"
          position="absolute"
          top="8.333333333333332%"
          bottom="8.333333333333332%"
          left="8.333333333333332%"
          right="8.333333333333332%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttondisabledunselected[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttondisabledunselected[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttondisabledunselected>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="546px"
        left="444px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Icon
          width="22px"
          height="24px"
          pathData="M22 5.5L22 20C22 22.2 20.2 24 18 24L10.7 24C9.62 24 8.6 23.57 7.85 22.81L0 14.83C0 14.83 1.26 13.6 1.3 13.58C1.52 13.39 1.79 13.29 2.09 13.29C2.31 13.29 2.51 13.35 2.69 13.45C2.73 13.46 7 15.91 7 15.91L7 4C7 3.17 7.67 2.5 8.5 2.5C9.33 2.5 10 3.17 10 4L10 11L11 11L11 1.5C11 0.67 11.67 0 12.5 0C13.33 0 14 0.67 14 1.5L14 11L15 11L15 2.5C15 1.67 15.67 1 16.5 1C17.33 1 18 1.67 18 2.5L18 11L19 11L19 5.5C19 4.67 19.67 4 20.5 4C21.33 4 22 4.67 22 5.5Z"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 24 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="0%"
          bottom="0%"
          left="4.166666666666666%"
          right="4.166666666666666%"
          {...getOverrideProps(overrides, "View.View[0].Icon[0]")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="734px"
        left="444px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <Icon
          width="22px"
          height="24px"
          pathData="M22 5.5L22 20C22 22.2 20.2 24 18 24L10.7 24C9.62 24 8.6 23.57 7.85 22.81L0 14.83C0 14.83 1.26 13.6 1.3 13.58C1.52 13.39 1.79 13.29 2.09 13.29C2.31 13.29 2.51 13.35 2.69 13.45C2.73 13.46 7 15.91 7 15.91L7 4C7 3.17 7.67 2.5 8.5 2.5C9.33 2.5 10 3.17 10 4L10 11L11 11L11 1.5C11 0.67 11.67 0 12.5 0C13.33 0 14 0.67 14 1.5L14 11L15 11L15 2.5C15 1.67 15.67 1 16.5 1C17.33 1 18 1.67 18 2.5L18 11L19 11L19 5.5C19 4.67 19.67 4 20.5 4C21.33 4 22 4.67 22 5.5Z"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 24 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="0%"
          bottom="0%"
          left="4.166666666666666%"
          right="4.166666666666666%"
          {...getOverrideProps(overrides, "View.View[1].Icon[0]")}
        ></Icon>
      </View>
      <Mdiradiobuttonchecked
        width="24px"
        height="24px"
        position="absolute"
        top="164px"
        left="484px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdiradiobuttonchecked[0]")}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="8.333333333333332%"
          bottom="8.333333333333332%"
          left="8.333333333333332%"
          right="8.333333333333332%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonchecked[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonchecked[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttonchecked>
      <Mdiradiobuttonhover
        width="28px"
        height="28px"
        position="absolute"
        top="162px"
        left="564px"
        overflow="hidden"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
        {...getOverrideProps(overrides, "View.Mdiradiobuttonhover[0]")}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="14.2855703830719%"
          bottom="14.285858188356674%"
          left="14.286007199968612%"
          right="14.285421371459961%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonhover[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="28px"
          height="28px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttonhover[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttonhover>
      <Mdiradiobuttondisabled
        width="24px"
        height="24px"
        position="absolute"
        top="164px"
        left="524px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdiradiobuttondisabled[0]")}
      >
        <Icon
          width="20px"
          height="20px"
          pathData="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          color="rgba(184.00000423192978,188.0000039935112,202.00000315904617,1)"
          position="absolute"
          top="8.333333333333332%"
          bottom="8.333333333333332%"
          left="8.333333333333332%"
          right="8.333333333333332%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttondisabled[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdiradiobuttondisabled[0].Icon[1]"
          )}
        ></Icon>
      </Mdiradiobuttondisabled>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="32px"
        fontWeight="600"
        color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
        lineHeight="42px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0px"
        position="absolute"
        top="60px"
        left="82px"
        padding="0px 0px 0px 0px"
        children="Checkbox"
        {...getOverrideProps(overrides, "View.Text[8]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="227px"
        left="101px"
        padding="0px 0px 0px 0px"
        children="Enabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[9]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="129px"
        left="82px"
        padding="0px 0px 0px 0px"
        children="Elements"
        {...getOverrideProps(overrides, "View.Text[10]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="678px"
        left="98px"
        padding="0px 0px 0px 0px"
        children="Hover Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[11]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="599px"
        left="98px"
        padding="0px 0px 0px 0px"
        children="Disabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[12]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="331px"
        left="99px"
        padding="0px 0px 0px 0px"
        children="Enabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[13]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="507px"
        left="99px"
        padding="0px 0px 0px 0px"
        children="Hover Selected / On"
        {...getOverrideProps(overrides, "View.Text[14]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="419px"
        left="99px"
        padding="0px 0px 0px 0px"
        children="Disabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[15]")}
      ></Text>
      <Mdicheckbox
        width="24px"
        height="24px"
        position="absolute"
        top="169px"
        left="122px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdicheckbox[0]")}
      >
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.Mdicheckbox[0].Icon[0]")}
        ></Icon>
        <Icon
          width="18px"
          height="18px"
          pathData="M16 0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.11 18 18 17.1 18 16L18 2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "View.Mdicheckbox[0].Icon[1]")}
        ></Icon>
      </Mdicheckbox>
      <Mdicheckbox
        width="24px"
        height="24px"
        position="absolute"
        top="169px"
        left="162px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdicheckbox[1]")}
      >
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.Mdicheckbox[1].Icon[0]")}
        ></Icon>
        <Icon
          width="18px"
          height="18px"
          pathData="M16 0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.11 18 18 17.1 18 16L18 2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(184.00000423192978,188.0000039935112,202.00000315904617,1)"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "View.Mdicheckbox[1].Icon[1]")}
        ></Icon>
      </Mdicheckbox>
      <Mdicheckboxoutlineblank
        width="24px"
        height="24px"
        position="absolute"
        top="169px"
        left="82px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdicheckboxoutlineblank[0]")}
      >
        <Icon
          width="18px"
          height="18px"
          pathData="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[0].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[0].Icon[1]"
          )}
        ></Icon>
      </Mdicheckboxoutlineblank>
      <Mdicheckboxoutlineblank
        width="24px"
        height="24px"
        position="absolute"
        top="169px"
        left="246px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Mdicheckboxoutlineblank[1]")}
      >
        <Icon
          width="18px"
          height="18px"
          pathData="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(184.00000423192978,188.0000039935112,202.00000315904617,1)"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[1].Icon[0]"
          )}
        ></Icon>
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblank[1].Icon[1]"
          )}
        ></Icon>
      </Mdicheckboxoutlineblank>
      <Mdicheckboxhover
        width="28px"
        height="28px"
        position="absolute"
        top="167px"
        left="202px"
        overflow="hidden"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
        {...getOverrideProps(overrides, "View.Mdicheckboxhover[0]")}
      >
        <Icon
          width="28px"
          height="28px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.Mdicheckboxhover[0].Icon[0]")}
        ></Icon>
        <Mdicheckbox
          position="absolute"
          top="7.142857142857142%"
          bottom="7.142857142857142%"
          left="7.142857142857142%"
          right="7.142857142857142%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxhover[0].Mdicheckbox[0]"
          )}
        >
          <Icon
            width="24px"
            height="24px"
            pathData=""
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(
              overrides,
              "View.Mdicheckboxhover[0].Mdicheckbox[0].Icon[0]"
            )}
          ></Icon>
          <Icon
            width="18px"
            height="18px"
            pathData="M16 0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.11 18 18 17.1 18 16L18 2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(
              overrides,
              "View.Mdicheckboxhover[0].Mdicheckbox[0].Icon[1]"
            )}
          ></Icon>
        </Mdicheckbox>
      </Mdicheckboxhover>
      <Mdicheckboxoutlineblankhover
        width="28px"
        height="28px"
        position="absolute"
        top="167px"
        left="286px"
        overflow="hidden"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(226.0000017285347,231.00000143051147,237.0000010728836,1)"
        {...getOverrideProps(overrides, "View.Mdicheckboxoutlineblankhover[0]")}
      >
        <Icon
          width="28px"
          height="28px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblankhover[0].Icon[0]"
          )}
        ></Icon>
        <Mdicheckboxoutlineblank
          position="absolute"
          top="7.142857142857142%"
          bottom="7.142857142857142%"
          left="7.142857142857142%"
          right="7.142857142857142%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "View.Mdicheckboxoutlineblankhover[0].Mdicheckboxoutlineblank[0]"
          )}
        >
          <Icon
            width="18px"
            height="18px"
            pathData="M16 2L16 16L2 16L2 2L16 2ZM16 0L2 0C0.9 0 0 0.9 0 2L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 2C18 0.9 17.1 0 16 0Z"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(
              overrides,
              "View.Mdicheckboxoutlineblankhover[0].Mdicheckboxoutlineblank[0].Icon[0]"
            )}
          ></Icon>
          <Icon
            width="24px"
            height="24px"
            pathData=""
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(
              overrides,
              "View.Mdicheckboxoutlineblankhover[0].Mdicheckboxoutlineblank[0].Icon[1]"
            )}
          ></Icon>
        </Mdicheckboxoutlineblank>
      </Mdicheckboxoutlineblankhover>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="557px"
        left="96px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[2]")}
      >
        <Icon
          width="22px"
          height="24px"
          pathData="M22 5.5L22 20C22 22.2 20.2 24 18 24L10.7 24C9.62 24 8.6 23.57 7.85 22.81L0 14.83C0 14.83 1.26 13.6 1.3 13.58C1.52 13.39 1.79 13.29 2.09 13.29C2.31 13.29 2.51 13.35 2.69 13.45C2.73 13.46 7 15.91 7 15.91L7 4C7 3.17 7.67 2.5 8.5 2.5C9.33 2.5 10 3.17 10 4L10 11L11 11L11 1.5C11 0.67 11.67 0 12.5 0C13.33 0 14 0.67 14 1.5L14 11L15 11L15 2.5C15 1.67 15.67 1 16.5 1C17.33 1 18 1.67 18 2.5L18 11L19 11L19 5.5C19 4.67 19.67 4 20.5 4C21.33 4 22 4.67 22 5.5Z"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 24 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="0%"
          bottom="0%"
          left="4.166666666666666%"
          right="4.166666666666666%"
          {...getOverrideProps(overrides, "View.View[2].Icon[0]")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        position="absolute"
        top="728px"
        left="96px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[3]")}
      >
        <Icon
          width="22px"
          height="24px"
          pathData="M22 5.5L22 20C22 22.2 20.2 24 18 24L10.7 24C9.62 24 8.6 23.57 7.85 22.81L0 14.83C0 14.83 1.26 13.6 1.3 13.58C1.52 13.39 1.79 13.29 2.09 13.29C2.31 13.29 2.51 13.35 2.69 13.45C2.73 13.46 7 15.91 7 15.91L7 4C7 3.17 7.67 2.5 8.5 2.5C9.33 2.5 10 3.17 10 4L10 11L11 11L11 1.5C11 0.67 11.67 0 12.5 0C13.33 0 14 0.67 14 1.5L14 11L15 11L15 2.5C15 1.67 15.67 1 16.5 1C17.33 1 18 1.67 18 2.5L18 11L19 11L19 5.5C19 4.67 19.67 4 20.5 4C21.33 4 22 4.67 22 5.5Z"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 24 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="0%"
          bottom="0%"
          left="4.166666666666666%"
          right="4.166666666666666%"
          {...getOverrideProps(overrides, "View.View[3].Icon[0]")}
        ></Icon>
      </View>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="32px"
        fontWeight="600"
        color="rgba(59.00000028312206,66.00000366568565,86.00000247359276,1)"
        lineHeight="42px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0px"
        position="absolute"
        top="60px"
        left="788px"
        padding="0px 0px 0px 0px"
        children="Switch"
        {...getOverrideProps(overrides, "View.Text[16]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="219px"
        left="776px"
        padding="0px 0px 0px 0px"
        children="Enabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[17]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="504px"
        left="788px"
        padding="0px 0px 0px 0px"
        children="Disabled Unselected / Off"
        {...getOverrideProps(overrides, "View.Text[18]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="314px"
        left="788px"
        padding="0px 0px 0px 0px"
        children="Enabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[19]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="16px"
        fontWeight="700"
        color="rgba(82.00000271201134,87.00000241398811,92.00000211596489,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="220px"
        height="24px"
        position="absolute"
        top="409px"
        left="788px"
        padding="0px 0px 0px 0px"
        children="Disabled Selected / On"
        {...getOverrideProps(overrides, "View.Text[20]")}
      ></Text>
    </View>
  );
}
