/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, IconYoutubeSearchedFor, Image, Text, View, Button } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

var username;
var email;
var journalCount = 0;
var timeSpent;
var count = 0;

Auth.currentAuthenticatedUser().then((user) => {
  username = user.username;
  email = user.attributes.email;
});

Storage.list('2022') // for listing ALL files without prefix, pass '' instead
  .then(result => (journalCount=(result.length)))
  .catch(err => console.log(err));

export default function Progress2(props) {
  const { overrides, ...rest } = props;

  Storage.configure({ track: true, level: "private" });
  const avatar = Storage.get("default-user.jpg");
  const [image, setImage] = useState(avatar);

  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };

  const getProfilePicture = () => {
    Storage.get("profilePicture.png")
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            setImage(url);
          } else {
            getDefaultProfilePicture();
          }
        });
      })
      .catch(err => console.log(err));
  };

  const getDefaultProfilePicture = () => {
    Storage.get("default-user.jpg", {
      level: "public"
    })
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            setImage(url);
          }
        });
      })
      .catch(err => console.log(err));
  };

  if (journalCount > 0) {
    count = journalCount*5;

    if (count >= 60) {
      count = count / 60;
      timeSpent = count + " hrs";
    } else {
      timeSpent = count + " mins";
    }
  } else {
    timeSpent = "0 mins"
  }

  return (
    <View
      width="100vw"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Progress2")}
    >
      <View
        width="1440px"
        height="1024px"
        position="absolute"
        top="-4px"
        left="-5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 30")}
      ></View>
      <View
        width="1080px"
        height="861px"
        position="absolute"
        top="80px"
        left="76px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(85,91,110,1)"
        {...getOverrideProps(overrides, "Rectangle 31")}
      ></View>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="32px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="35.15625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="24px"
        left="76px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Progress Overview"
        {...getOverrideProps(overrides, "Progress")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="28px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="29.296875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="480px"
        left="128px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Achievements"
        {...getOverrideProps(overrides, "Achievements")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue"
        fontSize="33px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="38.671875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        width="290px"
        height="43px"
        position="absolute"
        top="140px"
        left="460px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={username}
        {...getOverrideProps(overrides, "Jimmy Mac")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="30px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="33.984375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="246px"
        left="545px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={journalCount}
        {...getOverrideProps(overrides, "5")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="#cccccc"
        lineHeight="22.265625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="188px"
        left="461px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your Overall Progress"
        {...getOverrideProps(overrides, "Progress this week")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="28px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="29.296875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="480px"
        left="616px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categories Completed"
        {...getOverrideProps(overrides, "Categories Completed")}
      ></Text>
      <View
        width="475px"
        height="370px"
        position="absolute"
        top="535px"
        left="109px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 273")}
      ></View>
      <Image
        width="235px"
        height="172px"
        position="absolute"
        top="535px"
        left="616px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./youth.jpg')}
        {...getOverrideProps(overrides, "Rectangle 274")}
      ></Image>
      <Image
        width="70px"
        height="65px"
        position="absolute"
        top="238px"
        left="860px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./timeSpent.jpg')}
        {...getOverrideProps(overrides, "Rectangle 281")}
      ></Image>
        <Image
        width="70px"
        height="65px"
        position="absolute"
        top="238px"
        left="660px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./improvement.jpg')}
        {...getOverrideProps(overrides, "Rectangle 281")}
      ></Image>
      <Image
        width="235px"
        height="172px"
        position="absolute"
        top="535px"
        left="877px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./mediate.jpg')}
        {...getOverrideProps(overrides, "Rectangle 275")}
      ></Image>
      <Image
        width="235px"
        height="172px"
        position="absolute"
        top="729px"
        left="616px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./mediate.jpg')}
        {...getOverrideProps(overrides, "Rectangle 276")}
      ></Image>
      <Image
        width="235px"
        height="172px"
        position="absolute"
        top="729px"
        left="877px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./advanced.jpg')}
        {...getOverrideProps(overrides, "Rectangle 277")}
      ></Image>
      <Image
        width="300px"
        height="300px"
        position="absolute"
        top="115px"
        left="115px"
        borderRadius="50%"
        border="1px SOLID white"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={image}
        {...getOverrideProps(overrides, "Rectangle 278")}
      ></Image>
      <Image
        width="70px"
        height="61px"
        position="absolute"
        top="242px"
        left="460px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./journal.jpg')}
        {...getOverrideProps(overrides, "Rectangle 279")}
      ></Image>
      <Image
        width="70px"
        height="61px"
        position="absolute"
        top="345px"
        left="460px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./sleep.png')}
        {...getOverrideProps(overrides, "Rectangle 279")}
      ></Image>
      <Image
        width="70px"
        height="65px"
        position="absolute"
        top="345px"
        left="660px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./baseballBat.png')}
        {...getOverrideProps(overrides, "Rectangle 281")}
      ></Image>
      <Image
        width="70px"
        height="65px"
        position="absolute"
        top="345px"
        left="864px"
        borderRadius="50%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        src={require('./baseballGlove.png')}
        {...getOverrideProps(overrides, "Rectangle 281")}
      ></Image>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="285px"
        left="540px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Journals"
        {...getOverrideProps(overrides, "Journals")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="388px"
        left="540px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rested"
        {...getOverrideProps(overrides, "Journals")}
      ></Text>
      <Text
        fontfamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="38.671875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="140px"
        left="920px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Journal History"
        {...getOverrideProps(overrides, "Journals")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="30px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="33.984375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="246px"
        left="744px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="4"
        {...getOverrideProps(overrides, "27min")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="285px"
        left="744px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Improvements"
        {...getOverrideProps(overrides, "Time spent")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="388px"
        left="744px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hits"
        {...getOverrideProps(overrides, "Time spent")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="30px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="33.984375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="246px"
        left="945px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={timeSpent}
        {...getOverrideProps(overrides, "200")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="285px"
        left="945px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time Spent"
        {...getOverrideProps(overrides, "Improvement made")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="388px"
        left="945px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="IP"
        {...getOverrideProps(overrides, "Improvement made")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="490px"
        left="1046px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="View All"
        {...getOverrideProps(overrides, "View Allcgi")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="16px"
        fontWeight="300"
        color="rgba(105,111,121,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="850px"
        left="310px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="View All"
        {...getOverrideProps(overrides, "View Allkkr")}
      ></Text>
      <View
        width="25px"
        height="25px"
        position="absolute"
        top="929px"
        left="116px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ri:logout-box-fill")}
      ></View>
      <Image
        width="120px"
        height="120px"
        position="absolute"
        top="562px"
        left="145px"
        padding="0px 0px 0px 0px"
        src={require('./journalist.jpg')}
        {...getOverrideProps(overrides, "Badgexur")}
      ></Image>
      <Image
        width="120px"
        height="120px"
        position="absolute"
        top="690px"
        left="280px"
        padding="0px 0px 0px 0px"
        src={require('./winner.jpg')}
        {...getOverrideProps(overrides, "Badgezfi")}
      ></Image>
      <Image
        width="120px"
        height="120px"
        position="absolute"
        top="570px"
        left="425px"
        padding="0px 0px 0px 0px"
        src={require('./practiceAchieve.jpg')}
        {...getOverrideProps(overrides, "Badgejil")}
      ></Image>
    </View>
  );
}
