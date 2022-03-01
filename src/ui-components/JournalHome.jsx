import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {Divider, Image, Text, View } from "@aws-amplify/ui-react";
import {Link} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';

const Button = styled.button`
  font-family: "HelveticaNeue-Light";
  width: 208px;
  height: 40px;
  left: 270px;
  cursor: pointer;
  color: black;
  border: 1px solid black;
  padding: 4px 10px;
  min-width: 200px;
  font-size: 20px;
  top: 325px;
  position: absolute;
  background: #3d74f5;
  border-radius: 4px;

  transition: all 0.2s ease-in;

   &:hover {
     color: white;
     border: 1px solid #cccccc;
   }
`;

const Text1 = styled.text`
  font-family: "HelveticaNeue";
  color: #3d74f5;
  cursor: pointer;
  top: 780px;
  left: 408px;
  border: none;
  font-size: 30px;
  position: absolute;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

const Text2 = styled.text`
  font-family: "HelveticaNeue";
  color: #3d74f5;
  cursor: pointer;
  top: 975px;
  left: 408px;
  border: none;
  font-size: 30px;
  position: absolute;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

const Text3 = styled.text`
  font-family: "HelveticaNeue";
  color: #3d74f5;
  cursor: pointer;
  top: 1170px;
  left: 408px;
  border: none;
  font-size: 30px;
  position: absolute;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

export default function JournalHome(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    
    <View
      width="100vw"
      height="1400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="#000000"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Link to="/journal/advanced">
        <Image
          width="320px"
          height="320px"
          border="2px solid white"
          pathData="M243 121.5C243 188.603 188.603 243 121.5 243C54.3974 243 0 188.603 0 121.5C0 54.3974 54.3974 0 121.5 0C188.603 0 243 54.3974 243 121.5Z"
          viewBox={{ minX: 0, minY: 0, width: 243, height: 243 }}
          color="rgba(237.0000010728836,247.00000047683716,250.00000029802322,1)"
          position="absolute"
          top="78px"
          left="700px"
          {...getOverrideProps(overrides, "View.Icon[0]")}
          src={require('./practice.jpg')}
          borderRadius = "500px"
        ></Image>
      </Link>
      <Link to="/journal/advanced">
        <Button
          fontFamily="HelveticaNeue-Light"
          fontWeight="300"
          width="208px"
          height="47px"
          position="absolute"
          top="325px"
          left="265px"
          border="1px solid white"
          borderRadius="2px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgb(46,204,113)"
          children="Resume"
          {...getOverrideProps(overrides, "View.View[0]")}
        ></Button>
      </Link>
      <Text
        fontFamily="HelveticaNeue"
        fontSize="55px"
        fontWeight="500"
        color="#FFFFFF"
        lineHeight="60px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="450px"
        height="105px"
        position="absolute"
        top="130px"
        left="148px"
        textAlign="center"
        padding="0px 0px 0px 0px"
        children="Start your journal today"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="450px"
        height="66px"
        position="absolute"
        top="275px"
        left="148px"
        padding="0px 0px 0px 0px"
        children="Click below to get started"
        textAlign="center"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <View
        width="100vw"
        height="250px"
        position="absolute"
        top="435px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="black"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <Link to="/journal/advanced">
        <View
          width="418px"
          height="200px"
          position="absolute"
          top="460px"
          left="148px"
          boxShadow="0px 4px 10px rgba(0.7333333492279053, 0.8823529481887817, 0.9803921580314636, 0.25)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="LightGray"
          {...getOverrideProps(overrides, "View.View[2]")}
        ></View>
      </Link>
      <Link to="/journal/print">
        <View
          width="418px"
          height="200px"
          position="absolute"
          top="460px"
          left="647px"
          boxShadow="0px 4px 10px rgba(0.7333333492279053, 0.8823529481887817, 0.9803921580314636, 0.25)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="LightGray"
          {...getOverrideProps(overrides, "View.View[3]")}
        ></View>
      </Link>
      <Link to="/journal/advanced">
        <Text
          fontFamily="HelveticaNeue-Light"
          fontSize="20px"
          fontWeight="300"
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          lineHeight="30.46875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="350px"
          height="85px"
          position="absolute"
          top="545px"
          left="171px"
          padding="0px 0px 0px 0px"
          children="Personalize your journal to your style, focus on your goals and analytics"
          {...getOverrideProps(overrides, "View.Text[6]")}
        ></Text>
      </Link>
      <Link to="/journal/print">
        <Text
          fontFamily="HelveticaNeue"
          fontSize="22px"
          fontWeight="500"
          color="#000000"
          lineHeight="60px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-end"
          position="absolute"
          top="480px"
          left="755px"
          padding="0px 0px 0px 0px"
          children="Print a blank Journal"
          {...getOverrideProps(overrides, "View.Text[7]")}
        ></Text>
      </Link>
      <Link to="/journal/print">
        <Text
          fontFamily="HelveticaNeue-Light"
          fontSize="20px"
          fontWeight="300"
          color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
          lineHeight="30.46875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="350px"
          height="85px"
          position="absolute"
          top="535px"
          left="682px"
          padding="0px 0px 0px 0px"
          children="Want to write your journal by hand? Click here to print off an empty journal"
          {...getOverrideProps(overrides, "View.Text[11]")}
        ></Text>
      </Link>
      <Link to="/journal/advanced">
        <Text
          fontFamily="HelveticaNeue"
          fontSize="22px"
          fontWeight="500"
          color="#000000"
          lineHeight="60px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-end"
          position="absolute"
          top="480px"
          left="225px"
          padding="0px 0px 0px 0px"
          children="Design your own Journal"
          {...getOverrideProps(overrides, "View.Text[14]")}
        ></Text>
      </Link>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="22px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="60px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="700px"
        left="148px"
        padding="0px 0px 0px 0px"
        children="Select what best fits you"
        {...getOverrideProps(overrides, "View.Text[16]")}
      ></Text>
      <Link to="/journal/beginner">
        <Text1
          fontFamily="HelveticaNeue"
          fontSize="30px"
          fontWeight="500"
          color="rgb(46,204,113)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="780px"
          left="408px"
          padding="0px 0px 0px 0px"
          children="Beginners Journal"
          {...getOverrideProps(overrides, "View.Text[17]")}
        ></Text1>
      </Link>
      <Link to="/journal/intermediate">
        <Text2
          fontFamily="HelveticaNeue"
          fontSize="30px"
          fontWeight="500"
          color="rgb(46,204,113)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="975px"
          left="408px"
          padding="0px 0px 0px 0px"
          children="Intermediate Journal"
          {...getOverrideProps(overrides, "View.Text[18]")}
        ></Text2>
      </Link>
      <Link to="/journal/advanced">
        <Text3
          fontFamily="HelveticaNeue"
          fontSize="30px"
          fontWeight="500"
          color="rgb(46,204,113)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="1170px"
          left="408px"
          padding="0px 0px 0px 0px"
          children="Advanced Journal"
          {...getOverrideProps(overrides, "View.Text[19]")}
        ></Text3>
      </Link>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="18px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="360px"
        height="30px"
        position="absolute"
        top="825px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Start small, dream big"
        {...getOverrideProps(overrides, "View.Text[20]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="18px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="34px"
        position="absolute"
        top="1020px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Level up"
        {...getOverrideProps(overrides, "View.Text[21]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="18px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="25px"
        position="absolute"
        top="1215px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Dominate"
        {...getOverrideProps(overrides, "View.Text[22]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="594px"
        height="93px"
        position="absolute"
        top="860px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Ideally for newcomers to baseball, the Beginners Journal allows you to track the most basic analytics"
        {...getOverrideProps(overrides, "View.Text[23]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="594px"
        height="93px"
        position="absolute"
        top="1055px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="For standard players, this journal allows you to track more in-depth statistics along with emotions before, during, and after your games"
        {...getOverrideProps(overrides, "View.Text[24]")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="507px"
        height="93px"
        position="absolute"
        top="1250px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="For athletes who want analytics on their complete game, track everything from in game statistics, emotions, all the way to your daily meals and water intake"
        {...getOverrideProps(overrides, "View.Text[25]")}
      ></Text>
      <Link to="/journal/beginner">
        <Image
          width="246px"
          height="180px"
          position="absolute"
          top="770px"
          left="146px"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          border="1px solid white"
          {...getOverrideProps(overrides, "View.Image[0]")}
          src={require('./youth.jpg')}
        ></Image>
      </Link>
      <Link to="/journal/intermediate">
        <Image
          width="246px"
          height="180px"
          position="absolute"
          top="965px"
          left="146px"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          border="1px solid white"
          {...getOverrideProps(overrides, "View.Image[1]")}
          src={require('./mediate.jpg')}
        ></Image>
      </Link>
      <Link to="/journal/advanced">
        <Image
          width="246px"
          height="184px"
          position="absolute"
          top="1160px"
          left="146px"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          border="1px solid white"
          {...getOverrideProps(overrides, "View.Image[2]")}
          src={require('./advanced.jpg')}
        ></Image>
      </Link>
    </View>
  );
}