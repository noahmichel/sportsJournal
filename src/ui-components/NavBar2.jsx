/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #555B6E;
  padding: 4px 20px;
  min-width: 64px;
  font-size: 16px;
  border-radius: 8px;

  background: transparent;

  transition: all 0.1s ease-in;

  &:hover {
    background: #555B6E;
    color: #FFD6BA;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

const Button2 = styled.button`
  cursor: pointer;
  border: 3px solid #555B6E;
  padding: 4px 20px;
  min-width: 64px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;

  background: transparent;

  transition: all 0.4s ease-in;

  &:hover {
    background: #555B6E;
    color: #FFD6BA;
    box-shadow: 0 12px 16px 0 #FFD6BA, 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

const Button3 = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid #89B0AE;
  border-radius: 160px;

  &:hover {
    background: transparent;
  }
`;

import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  IconNotifications,
  Image,
  Text
} from "@aws-amplify/ui-react";
export default function NavBar2(props) {
  const { navLogo, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="20px"
      direction="row"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 32px 24px 32px"
      backgroundColor="#89B0AE"
      overflow="hidden"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="20px"
        direction="row"
        height="45px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Icon
          width="36px"
          height="36px"
          pathData="M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="#FFD6BA"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[0].Icon[0]")}
        ></Icon>
        <Button
          type="button"
          className="button"
          children="Home"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Button>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="633.5px"
        alignItems="center"
        grow="1"
        basis="633.5px"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Button
          type="button"
          className="button"
          children="Journal"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Button>
        <Button
          type="button"
          className="button"
          children="Progress"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
        ></Button>
        <Button
          type="button"
          className="button"
          children="Scouting"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[2]")}
        ></Button>
        <Button
          type="button"
          className="button"
          children="Yearbook"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[3]")}
        ></Button>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="633.5px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="633.5px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Button2
          type="button2"
          className="button2"
          children="Login or Register"
          {...getOverrideProps(overrides, "Flex.Flex[2].SearchField[0]")}
        ></Button2>
        <IconNotifications
          width="32px"
          height="32px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
          type="notifications"
          fontSize="32px"
          {...getOverrideProps(overrides, "Flex.Flex[2].IconNotifications[0]")}
        ></IconNotifications>
        <Button3>
          <Image
            width="45px"
            height="45px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            src={require('./login.jpg')}
            {...getOverrideProps(overrides, "Flex.Flex[2].Image[0]")}
          ></Image>
        </Button3>
      </Flex>
    </Flex>
  );
}
