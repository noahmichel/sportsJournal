/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled.button`
  font-family: "HelveticaNeue-Light";
  cursor: pointer;
  color: #cccccc;
  border: none;
  background: none;
  padding: 4px 10px;
  min-width: 108px;
  font-size: 20px;

  transition: all 0.2s ease-in;

   &:hover {
     color: white;
   }
`;

const Button2 = styled.button`
  color: #cccccc;
  cursor: pointer;
  border: transparent;
  padding: 4px 10px;
  min-width: 108px;
  font-size: 20px;
  border-radius: 4px;
  font-family: "HelveticaNeue-Light";

  background: #3d74f5;

  transition: all 0.2s ease-in;

  &:hover {
    color: white;
    //box-shadow: 0 1px 2px 0 black;
  }
`;

const Button3 = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid #555B6E;
  border-radius: 160px;
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
      gap="1px"
      direction="row"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      padding="10px 32px 10px 32px"
      backgroundColor="#555B6E"
      overflow="hidden"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="5px"
        direction="row"
        height="top"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Link to="/">
          <Image
            width="32px"
            height="32px"
            position="relative"
            src={require('./baseballIcon.png')}
            {...getOverrideProps(overrides, "Flex.Flex[0].Icon[0]")}
          ></Image>
        </Link>
        <Link to="/">
          <Button
            type="button"
            className="button"
            children="Home"
            {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
          ></Button>
        </Link>
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
        <Link to="/journal">
          <Button
            type="button"
            className="button"
            children="Journal"
            {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
          >
          </Button>
        </Link>
        <Link to="/progress">
          <Button
            type="button"
            className="button"
            children="Progress"
            {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
          ></Button>
        </Link>
        <Link to="/scouting">
          <Button
            type="button"
            className="button"
            children="Scouting"
            {...getOverrideProps(overrides, "Flex.Flex[1].Text[2]")}
          ></Button>
        </Link>
        <Link to="/yearbook">
          <Button
            type="button"
            className="button"
            children="Yearbook"
            {...getOverrideProps(overrides, "Flex.Flex[1].Text[3]")}
          ></Button>
        </Link>
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
        <Link to="/login">
          <Button2
            type="button2"
            className="button2"
            children="Login"
            {...getOverrideProps(overrides, "Flex.Flex[2].SearchField[0]")}
          ></Button2>
        </Link>
        <IconNotifications
          width="32px"
          height="32px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          color="#cccccc"
          type="notifications"
          fontSize="30px"
          {...getOverrideProps(overrides, "Flex.Flex[2].IconNotifications[0]")}
        ></IconNotifications>
        <Link to="/myProfile">
          <Button3>
            <Image
              width="38px"
              height="38px"
              shrink="0"
              position="relative"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              border="3px solid white"
              src={require('./default-user.jpg')}
              {...getOverrideProps(overrides, "Flex.Flex[2].Image[0]")}
            ></Image>
          </Button3>
        </Link>
      </Flex>
    </Flex>
  );
}
