/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View, Text, TextField, SelectField, Image} from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled.button`
  font-family: "HelveticaNeue";
  font-weight: 500;
  position: absolute;
  top: 240px;
  left: 48px;
  cursor: pointer;
  color: #3d74f5;
  border: none;
  background: none;
  font-size: 20px;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

const Button2 = styled.button`
  font-family: "HelveticaNeue";
  font-weight: 500;
  position: absolute;
  top: 180px;
  left: 535px;
  cursor: pointer;
  color: #3d74f5;
  border: none;
  background: none;
  font-size: 20px;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

const Button3 = styled.button`
  font-family: "HelveticaNeue";
  font-weight: 500;
  position: absolute;
  top: -1px;
  left: 510px;
  cursor: pointer;
  color: #3d74f5;
  border: none;
  background: none;
  font-size: 20px;

  transition: all 0.2s ease-in;

   &:hover {
    text-decoration: underline;
   }
`;

const Select1 = styled.select`
  font-family: "HelveticaNeue-Light";
  font-weight: 300;
  width: 100%;
  position: relative;
  left: 150px;
  bottom: 24px;
  width: 140px;
  height: 28px;
  background: rgba(196,196,196,0.39);
  color: white;
  font-size: 16px;
  border: none;
  placeholder:"Not Specified";
  box-sizing: border-box;
  box-shadow:none;
  
`;

var username;
var email;
var newBio;
var bioText;
var team1;
var team2;
var teamType1;
var teamType2;
var newTeam1;
var newTeam2;
var gender;
var height;
var weight;
var age = "";
var journalCount = 0;
var begJournalCount = 0;
var intJournalCount = 0;
var advJournalCount = 0;
var totalString ="";
var i = 0;



  Auth.currentAuthenticatedUser().then((user) => {
    username = user.username;
    email = user.attributes.email;
  });

  const saveBio = (bioText) => {
    Storage.put("bio.txt", bioText, {
      contentType: "plain/text"
    })
  }

  Storage.list('2022') // for listing ALL files without prefix, pass '' instead
    .then(result => (journalCount=(result.length)))
    .catch(err => console.log(err));

  Storage.list('2022') // for listing ALL files without prefix, pass '' instead
    .then(result => {
      console.log(result[0].key.toString())
      for ( ; i < result.length; i = i+1) {
        Storage.get(result[i].key.toString(), { download: true }).then(res => {
          res.Body.text().then(string => {totalString=totalString+string+"\n"})
        })
      }
    })
    .catch(err => console.log(err));


    // Storage.list('beg') // for listing ALL files without prefix, pass '' instead
    // .then(result => (begJournalCount=(result.length)))
    // .catch(err => console.log(err));

    // Storage.list('int') // for listing ALL files without prefix, pass '' instead
    // .then(result => (intJournalCount=(result.length)))
    // .catch(err => console.log(err));

    // Storage.list('adv') // for listing ALL files without prefix, pass '' instead
    // .then(result => (advJournalCount=(result.length)))
    // .catch(err => console.log(err));

    Storage.get('bio.txt', { download: true }).then(result => {
      result.Body.text().then(string => { bioText=string })
    })

    Storage.get('team1.txt', { download: true }).then(result => {
      result.Body.text().then(string => { team1=string })
    })

    Storage.get('team2.txt', { download: true }).then(result => {
      result.Body.text().then(string => { team2=string })
    })

    const saveGender = (event) => {
      Storage.put("gender.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    const saveHeight = (event) => {
      Storage.put("height.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    const saveWeight = (event) => {
      Storage.put("weight.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    const saveAge = (event) => {
      Storage.put("age.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    const saveTeamType1 = (event) => {
      Storage.put("teamType1.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    const saveTeamType2 = (event) => {
      Storage.put("teamType2.txt", event.target.value, {
        contentType: "plain/text"
      })
    }

    Storage.get('teamType1.txt', { download: true }).then(result => {
      result.Body.text().then(string => { teamType1=string })
    })

    Storage.get('teamType2.txt', { download: true }).then(result => {
      result.Body.text().then(string => { teamType2=string })
    })


    Storage.get('gender.txt', { download: true }).then(result => {
      result.Body.text().then(string => { gender=string })
    })

    Storage.get('height.txt', { download: true }).then(result => {
      result.Body.text().then(string => { height=string })
    })

    Storage.get('weight.txt', { download: true }).then(result => {
      result.Body.text().then(string => { weight=string })
    })

    Storage.get('age.txt', { download: true }).then(result => {
      result.Body.text().then(string => { age=string })
    })

    const saveTeam1 = (team1) => {
      Storage.put("team1.txt", team1, {
        contentType: "plain/text"
      })
    }

    const saveTeam2 = (team2) => {
      Storage.put("team2.txt", team2, {
        contentType: "plain/text"
      })
    }


export default function WireframePublished(props) {
  const { overrides, ...rest } = props;

  console.log(totalString);

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
        width="306.26px"
        height="53.13px"
        position="absolute"
        top="141.83px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      >
        <Text
        padding="0px 12px"
        lineHeight="53.13px"
        textAlign="left"
        fontFamily="HelveticaNeue"
        fontSize="42px"
        fontWeight="500"
        color="white"
        children={username}
        ></Text>
      </View>
      <View
        width="150px"
        height="31px"
        position="absolute"
        top="617.09px"
        left="102px"
        padding="0px 0px 0px 0px"
        borderRadius="2px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      >
        <Text
        padding="0px 12px"
        lineHeight="28.04px"
        textAlign="Center"
        fontFamily="HelveticaNeue"
        fontSize="22px"
        fontWeight="500"
        color="white"
        children="Images"
        ></Text>
      </View>
        <Text
        position="absolute"
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        top="520px"
        left="52px"
        color="white"
        children="Achievements"
        ></Text>
      <View
        width="33.21px"
        height="31px"
        position="absolute"
        top="548.45px"
        left="52px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(210,210,210,1)"
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
      ><Text
        padding="0px 12px"
        lineHeight="28.04px"
        textAlign="left"
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        children={email}
        ></Text>
      </View>
      <Link to="/myProfile/edit">
        <Button
            border="none"
            fontFamily="HelveticaNeue-Light"
            position="absolute"
            top="246.77px"
            left="52px"
            fontWeight="300"
            padding="0px 0px 0px 0px"
            color="#3d74f5"
            children="edit profile"
            {...getOverrideProps(overrides, "Rectangle 3")}
        ></Button>
      </Link>
      <View
        borderRadius="50%"
        width="24px"
        height="24px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="290.9px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 2")}
      ><Text
          padding="0px 32px"
          lineHeight="24px"
          textAlign="Center"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="500"
          color="white"
          children="Gender"
        ></Text>
      </View>
      <Text
        position="absolute"
        top="290.9px"
        left="75px"
        padding="0px 120px"
        lineHeight="24px"
        textAlign="Center"
        fontFamily="HelveticaNeue-Light"
        fontSize="24px"
        fontWeight="300"
        color="rgb(204,204,204)"
        children={gender}
        ></Text>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="342.56px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 3")}
      >
        <Text
          padding="0px 32px"
          lineHeight="24px"
          textAlign="Center"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="500"
          color="white"
          children="Height"
        ></Text>
      </View>
      <Text
        position="absolute"
        top="342.56px"
        left="75px"
        padding="0px 120px"
        lineHeight="24px"
        textAlign="Center"
        fontFamily="HelveticaNeue-Light"
        fontSize="24px"
        fontWeight="300"
        color="rgb(204,204,204)"
        children={height}
        ></Text>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="394.22px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 4")}
      >
        <Text
          padding="0px 32px"
          lineHeight="24px"
          textAlign="Center"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="500"
          color="white"
          children="Weight"
        ></Text>
      </View>
      <Text
        position="absolute"
        top="394.22px"
        left="75px"
        padding="0px 120px"
        lineHeight="24px"
        textAlign="Center"
        fontFamily="HelveticaNeue-Light"
        fontSize="24px"
        fontWeight="300"
        color="rgb(204,204,204)"
        children={weight}
        ></Text>
      <View
        borderRadius="50%"
        width="23.62px"
        height="23.62px"
        backgroundColor="rgba(210,210,210,1)"
        position="absolute"
        top="445.88px"
        left="52px"
        {...getOverrideProps(overrides, "Ellipse 5")}
      >
        <Text
          padding="0px 32px"
          lineHeight="24px"
          textAlign="Center"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="500"
          color="white"
          children="Age"
        ></Text>
      </View>
      <Text
        position="absolute"
        top="445.88px"
        left="75px"
        padding="0px 120px"
        lineHeight="24px"
        textAlign="Center"
        fontFamily="HelveticaNeue-Light"
        fontSize="24px"
        fontWeight="300"
        color="rgb(204,204,204)"
        children={age + " years old"}
        ></Text>
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
      <View
        width="602.93px"
        height="82.65px"
        position="absolute"
        top="475px"
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
        top="581px"
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
      <Text
        height="222px"
        width="602.93px"
        position="absolute"
        top="250px"
        left="406.97px"
        padding="0px 30px 0px 30px"
        lineHeight="24px"
        textAlign="left"
        fontFamily="HelveticaNeue-Light"
        lineHeight="30px"
        fontSize="24px"
        fontWeight="300"
        color="rgb(204,204,204)"
        children={bioText}
        ></Text>
      
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
        width="195px"
        height="28.04px"
        position="absolute"
        top="120px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 36")}
      >
        <Text
        padding="0px 12px"
        lineHeight="28.04px"
        textAlign="center"
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        children="My Profile"
        ></Text>
      </View>
      <View
        width="150px"
        height="32.47px"
        position="absolute"
        top="184.63px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "Rectangle 37")}
      >
        <Text
        padding="0px 12px"
        lineHeight="32.47px"
        textAlign="Center"
        fontFamily="HelveticaNeue"
        fontSize="24px"
        fontWeight="500"
        color="white"
        children="Biography"
        ></Text>
      </View>
      <View
        width="195px"
        height="32.47px"
        position="absolute"
        top="423px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 37")}
      >
        <Text
        padding="0px 12px"
        lineHeight="32.47px"
        textAlign="left"
        fontFamily="HelveticaNeue-Light"
        fontSize="24px"
        fontWeight="300"
        color="white"
        children="Team Affiliation"
        ></Text>
      </View>
      <View
        width="320px"
        height="32.47px"
        position="absolute"
        top="500px"
        left="430px"
        padding="0px 0px 0px 0px"
        backgroundColor="#C4C4C4"
        borderRadius="2px"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ><Text
        fontFamily="HelveticaNeue"
        color="black"
        fontSize="24px"
        fontWeight="500"
        padding="0px 10px"
        lineHeight="32.47px"
        textAlign="center"
        children={team1}
        ></Text>
      </View>
      <View
        width="150px"
        height="32.47px"
        position="absolute"
        top="500px"
        left="775px"
        padding="0px 0px 0px 0px"
        backgroundColor="#C4C4C4"
        borderRadius="2px"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ><Text
        fontFamily="HelveticaNeue"
        color="black"
        fontSize="24px"
        fontWeight="500"
        lineHeight="32.47px"
        textAlign="center"
        children={teamType1}
        ></Text>
      </View>
        <Image
            top="500px"
            left="950px"
            width="32px"
            height="32px"
            position="absolute"
            src={require('./baseballIcon.png')}
            {...getOverrideProps(overrides, "Flex.Flex[0].Icon[0]")}
          ></Image>
      <View
        width="320px"
        height="32.47px"
        position="absolute"
        padding="0px 0px 0px 0px"
        backgroundColor="#C4C4C4"
        borderRadius="2px"
        top="606px"
        left="430px"
        {...getOverrideProps(overrides, "Rectangle 39")}
      >
        <Text
        fontFamily="HelveticaNeue"
        color="black"
        fontSize="24px"
        fontWeight="500"
        padding="0px 10px"
        lineHeight="32.47px"
        textAlign="center"
        children={team2}
        ></Text>
      </View>
      <View
        width="150px"
        height="32.47px"
        position="absolute"
        top="606px"
        left="775px"
        padding="0px 0px 0px 0px"
        backgroundColor="#C4C4C4"
        borderRadius="2px"
        {...getOverrideProps(overrides, "Rectangle 38")}
      ><Text
        fontFamily="HelveticaNeue"
        color="black"
        fontSize="24px"
        fontWeight="500"
        lineHeight="32.47px"
        textAlign="center"
        children={teamType2}
        ></Text>
      </View>
      <Image
            top="606px"
            left="950px"
            width="32px"
            height="32px"
            position="absolute"
            src={require('./baseballIcon.png')}
            {...getOverrideProps(overrides, "Flex.Flex[0].Icon[0]")}
          ></Image>
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
      >
        <Text
          padding="0px 12px"
          lineHeight="35.42px"
          textAlign="left"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="300"
          color="black"
          children={"Number of journals completed:\t" + journalCount}
        ></Text>
      </View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="910.07px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 48")}
      >
        <Text
          padding="0px 12px"
          lineHeight="35.42px"
          textAlign="left"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="300"
          color="black"
          children={"Number of occurances:\t"}
        ></Text>
      </View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="955.08px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 49")}
      >
        {/* <Text
          padding="0px 12px"
          lineHeight="35.42px"
          textAlign="left"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="300"
          color="black"
          children={"Number of intermediate journals completed:\t" + intJournalCount}
        ></Text> */}
      </View>
      <View
        width="591.12px"
        height="35.42px"
        position="absolute"
        top="1000.1px"
        left="413.61px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(244,244,244,1)"
        {...getOverrideProps(overrides, "Rectangle 50")}
      >
        {/* <Text
          padding="0px 12px"
          lineHeight="35.42px"
          textAlign="left"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="300"
          color="black"
          children={"Number of advanced journals completed:\t" + advJournalCount}
        ></Text> */}
      </View>
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
        width="200px"
        height="53.13px"
        position="absolute"
        top="755.09px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 51")}
      >
        <Text
        lineHeight="53.13px"
        textAlign="Center"
        fontFamily="HelveticaNeue-Light"
        fontSize="28px"
        fontWeight="300"
        color="Black"
        children="Overview"
        ></Text>
      </View>
      <View
        width="616.22px"
        height="20.66px"
        position="absolute"
        top="825.94px"
        left="406.97px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.39)"
        {...getOverrideProps(overrides, "Rectangle 52")}
      >
        <Text
          padding="0px 12px"
          lineHeight="20.66px"
          textAlign="left"
          fontFamily="HelveticaNeue-Light"
          fontSize="20px"
          fontWeight="300"
          color="black"
          children={username + "'s recap"}
        ></Text>
      </View>
    </View>
  );
}
