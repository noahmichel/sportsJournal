import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import {Link} from 'react-router-dom';
import { Auth } from 'aws-amplify';

export default function JournalHome(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="100vw"
      height="2041px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="#000000"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="243px"
        height="243px"
        pathData="M243 121.5C243 188.603 188.603 243 121.5 243C54.3974 243 0 188.603 0 121.5C0 54.3974 54.3974 0 121.5 0C188.603 0 243 54.3974 243 121.5Z"
        viewBox={{ minX: 0, minY: 0, width: 243, height: 243 }}
        color="rgba(237.0000010728836,247.00000047683716,250.00000029802322,1)"
        position="absolute"
        top="95px"
        left="850px"
        {...getOverrideProps(overrides, "View.Icon[0]")}
        src={require('./practice.jpg')}
        borderRadius = "500px"
      ></Image>
      <Button
        width="208px"
        height="47px"
        position="absolute"
        top="325px"
        left="148px"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgb(46,204,113)"
        children="Resume"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="55px"
        fontWeight="700"
        color="#FFFFFF"
        lineHeight="60px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="600px"
        height="105px"
        position="absolute"
        top="130px"
        left="148px"
        padding="0px 0px 0px 0px"
        children="Get started on your personal journal"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="497px"
        height="66px"
        position="absolute"
        top="275px"
        left="148px"
        padding="0px 0px 0px 0px"
        children="Click below to get started."
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="57px"
        height="43px"
        position="absolute"
        top="27px"
        left="856px"
        padding="0px 0px 0px 0px"
        children="Works"
        {...getOverrideProps(overrides, "View.Text[2]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="106px"
        height="43px"
        position="absolute"
        top="27px"
        left="882px"
        padding="0px 0px 0px 0px"
        children="Blog"
        {...getOverrideProps(overrides, "View.Text[3]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="71px"
        height="43px"
        position="absolute"
        top="27px"
        left="1021px"
        padding="0px 0px 0px 0px"
        children="Contact"
        {...getOverrideProps(overrides, "View.Text[4]")}
      ></Text>
      <View
        width="100vw"
        height="396px"
        position="absolute"
        top="435px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgb(46,204,113)"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <View
        width="418px"
        height="295px"
        position="absolute"
        top="485px"
        left="148px"
        boxShadow="0px 4px 10px rgba(0.7333333492279053, 0.8823529481887817, 0.9803921580314636, 0.25)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.View[2]")}
      ></View>
      <View
        width="418px"
        height="295px"
        position="absolute"
        top="485px"
        left="650px"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.View[3]")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
        lineHeight="30.46875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="400px"
        height="85px"
        position="absolute"
        top="550px"
        left="171px"
        padding="0px 0px 0px 0px"
        children="Personalize your journal to what you would like to include, while excluding what you don't."
        {...getOverrideProps(overrides, "View.Text[6]")}
      ></Text>

      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(33.00000183284283,36.00000165402889,61.00000016391277,1)"
        lineHeight="30.46875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="85px"
        position="absolute"
        top="490px"
        left="750px"
        padding="0px 0px 0px 0px"
        children="Print a blank Journal"
        {...getOverrideProps(overrides, "View.Text[7]")}
      ></Text>
     
   
     <Icon
        width="0px"
        height="21px"
        pathData="M-0.5 0L-0.5 21L0.5 21L0.5 0L-0.5 0Z"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 21 }}
        color="rgba(0,0,0,1)"
        position="absolute"
        top="793px"
        left="301px"
        {...getOverrideProps(overrides, "View.Icon[2]")}
      ></Icon>
      <Icon
        width="0px"
        height="21px"
        pathData="M-0.5 0L-0.5 21L0.5 21L0.5 0L-0.5 0Z"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 21 }}
        color="rgba(0,0,0,1)"
        position="absolute"
        top="791px"
        left="740px"
        {...getOverrideProps(overrides, "View.Icon[3]")}
      ></Icon>

      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="#00000"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="34px"
        position="absolute"
        top="560px"
        left="670px"
        padding="0px 0px 0px 0px"
        children="Want to write your journal by hand? Click below to print a pdf of an empty journal."
        {...getOverrideProps(overrides, "View.Text[11]")}
      ></Text>
    
    
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
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
     
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="60px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="850px"
        left="148px"
        padding="0px 0px 0px 0px"
        children="Select what best fits you"
        {...getOverrideProps(overrides, "View.Text[16]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgb(46,204,113)"
        lineHeight="35.15625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="915px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Beginners Journal"
        {...getOverrideProps(overrides, "View.Text[17]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgb(46,204,113)"
        lineHeight="35.15625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="1140px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Intermediate Journal"
        {...getOverrideProps(overrides, "View.Text[18]")}
      ></Text>
      <Link to="/journal/advanced">
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="700"
          color="rgb(46,204,113)"
          lineHeight="35.15625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="1365px"
          left="410px"
          padding="0px 0px 0px 0px"
          children="Advanced Journal"
          {...getOverrideProps(overrides, "View.Text[19]")}
        ></Text>
      </Link>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="360px"
        height="30px"
        position="absolute"
        top="950px"
        left="480px"
        padding="0px 0px 0px 0px"
        children="Start small, dream big"
        {...getOverrideProps(overrides, "View.Text[20]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="34px"
        position="absolute"
        top="1170px"
        left="481px"
        padding="0px 0px 0px 0px"
        children="Get to the next level"
        {...getOverrideProps(overrides, "View.Text[21]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="374px"
        height="25px"
        position="absolute"
        top="1395px"
        left="485px"
        padding="0px 0px 0px 0px"
        children="Dominate the competition"
        {...getOverrideProps(overrides, "View.Text[22]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="594px"
        height="93px"
        position="absolute"
        top="975px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="Ideally for beginning baseball players, the Beginners Journal allows you to track the most basic statistics."
        {...getOverrideProps(overrides, "View.Text[23]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="594px"
        height="93px"
        position="absolute"
        top="1195px"
        left="410px"
        padding="0px 0px 0px 0px"
        children="For more intermediate players, this journal allows you to track more in-depth statistics along with emotions before, during, and after your games."
        {...getOverrideProps(overrides, "View.Text[24]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="#FFFFFF"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="507px"
        height="93px"
        position="absolute"
        top="1420px"
        left="413px"
        padding="0px 0px 0px 0px"
        children="For advanced athletes, track everything from in game statistics, emotions, to your daily meals and water intake. Elevate yourself past your competition."
        {...getOverrideProps(overrides, "View.Text[25]")}
      ></Text>
   

 <Icon
        width="858px"
        height="0px"
        pathData="M0 0.5L858 0.5L858 -0.5L0 -0.5L0 0.5Z"
        viewBox={{ minX: 0, minY: 0, width: 858, height: 0.0000762939453125 }}
        color="rgba(224.000001847744,224.000001847744,224.000001847744,1)"
        position="absolute"
        top="1283px"
        left="146px"
        transformOrigin="top left"
        transform="rotate(0.000005008956130975318deg)"
        {...getOverrideProps(overrides, "View.Icon[4]")}
      ></Icon>
 
      <Icon
        width="858px"
        height="0px"
        pathData="M0 0.5L858 0.5L858 -0.5L0 -0.5L0 0.5Z"
        viewBox={{ minX: 0, minY: 0, width: 858, height: 0.00006103515625 }}
        color="rgba(224.000001847744,224.000001847744,224.000001847744,1)"
        position="absolute"
        top="1529px"
        left="146px"
        transformOrigin="top left"
        transform="rotate(0.000005008956130975318deg)"
        {...getOverrideProps(overrides, "View.Icon[5]")}
      ></Icon>
      <Icon
        width="858px"
        height="0px"
        pathData="M0 0.5L858 0.5L858 -0.5L0 -0.5L0 0.5Z"
        viewBox={{ minX: 0, minY: 0, width: 858, height: 0.00006103515625 }}
        color="rgba(224.000001847744,224.000001847744,224.000001847744,1)"
        position="absolute"
        top="px"
        left="146px"
        transformOrigin="top left"
        transform="rotate(0.000005008956130975318deg)"
        {...getOverrideProps(overrides, "View.Icon[6]")}
      ></Icon>
      <Image
        width="246px"
        height="180px"
        position="absolute"
        top="915px"
        left="146px"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[0]")}
        src={require('./youth.jpg')}
      ></Image>
      <Image
        width="246px"
        height="180px"
        position="absolute"
        top="1140px"
        left="146px"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[1]")}
        src={require('./mediate.jpg')}
      ></Image>
      <Image
        width="246px"
        height="184px"
        position="absolute"
        top="1365px"
        left="146px"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[2]")}
        src={require('./advanced.jpg')}
      ></Image>
      
  
    </View>

  );
}