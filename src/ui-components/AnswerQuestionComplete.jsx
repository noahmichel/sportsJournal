/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {Children, useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View, Image, RadioGroupField, Flex } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { lazyload } from 'react-lazyload';

lazyload({
  height: 200,
  once: true,
})


const Button = styled.button`
  font-family: "HelveticaNeue";
  cursor: pointer;
  color: #cccccc;
  border: none;
  background: none;
  padding: 4px 10px;
  min-width: 108px;
  font-size: 24px;
  position: absolute;
  top: 526px;
  left: 1075px;
  display: flex;
  text-align: center;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
     color: white;
   }
`;

const Button2 = styled.button`
  font-family: "HelveticaNeue";
  cursor: pointer;
  color: #cccccc;
  border: none;
  background: none;
  padding: 4px 10px;
  min-width: 108px;
  font-size: 24px;
  position: absolute;
  top: 526px;
  left: 70px;
  display: flex;
  text-align: center;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
     color: white;
   }
`;

const Button3 = styled.button`
  font-family: "HelveticaNeue";
  cursor: pointer;
  color: #cccccc;
  border: none;
  background: none;
  padding: 4px 10px;
  min-width: 108px;
  font-size: 24px;
  position: absolute;
  top: 526px;
  left: 135px;
  display: flex;
  text-align: center;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
     color: white;
   }
`;

const Button4 = styled.button`
  font-family: "HelveticaNeue";
  cursor: pointer;
  color: #cccccc;
  border: none;
  background: none;
  padding: 4px 10px;
  min-width: 90px;
  font-size: 24px;
  position: absolute;
  top: 526px;
  left: 960px;
  display: flex;
  text-align: center;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
    color: Lightgreen;
   }
`;

export default function AnswerQuestionComplete(props) {
  const { overrides, ...rest } = props;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

var today2 = new Date();
var dd = String(today2.getDate()).padStart(2, '0');
var mm = String(today2.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today2.getFullYear();
today2 = mm + '/' + dd + '/' + yyyy;

const [select, setSelect] = useState();

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <View
      width="100vw"
      height="660px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="black"
      {...rest}
      {...getOverrideProps(overrides, "AnswerQuestion")}
    >
      <View
        width="1125px"
        height="500px"
        position="absolute"
        top="75px"
        left="50px"
        boxShadow="0px 15px 40px rgba(0.9291666746139526, 0.9291666746139526, 0.9291666746139526, 1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="#555B6E"
        {...getOverrideProps(overrides, "Rectangle 31")}
      ></View>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="33px"
        fontWeight="500"
        color="white"
        lineHeight="38.671875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        width="1125px"
        top="100px"
        left="50px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Success!"
        {...getOverrideProps(overrides, "How did you play today?")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        lineHeight="23.4375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        width="1125px"
        top="150px"
        left="50px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your responses for beginner journal have been recorded"
        {...getOverrideProps(overrides, "Answer the question below")}
      ></Text>
      <Flex
      backgroundColor="black"
      display="flex"
      textAlign="center"
      justifyContent="center"
      position="absolute"
      width="450px"
      top="200px"
      height="270px"
      borderRadius="30px"
      left="390px"
      ><Image
          src={require('./baseball.jpg')}
          width="450px"
          height="270px"
          top="0px"
          position="relative"
          justifyContent="center"
          boxShadow="0px 15px 40px rgba(0.9291666746139526, 0.9291666746139526, 0.9291666746139526, 1)"
          borderRadius="30px"
          {...getOverrideProps(overrides, "Rectangle 274")}
        ></Image>
      </Flex>
      <Link to="/journal" style={{textDecoration: 'none'}}>
        <Button
          children="Next"
          {...getOverrideProps(overrides, "Next")}
        ></Button>
      </Link>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="30px"
        fontWeight="300"
        color="#cccccc"
        lineHeight="10px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="30px"
        left="25px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Beginners Journal -"
        {...getOverrideProps(overrides, "Beginners Journal")}
      >
      </Text>
      <Text
          fontFamily="HelveticaNeue-Light"
          fontSize="30px"
          fontWeight="300"
          color="#cccccc"
          lineHeight="10px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          position="absolute"
          top="30px"
          left="287px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={today2}
        ></Text>
      <Link to="/journal" style={{textDecoration: 'none'}}>
        <Button2
          children="Exit"
          {...getOverrideProps(overrides, "Exit")}
        ></Button2>
      </Link>
      <Link to="/progress" style={{textDecoration: 'none'}}>
        <Button4
        children="Progress"
        {...getOverrideProps(overrides, "Exit")}
        ></Button4>
      </Link>
    </View>
  );
}
