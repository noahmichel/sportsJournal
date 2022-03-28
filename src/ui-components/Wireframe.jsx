/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View, Text, TextField, SelectField} from "@aws-amplify/ui-react";
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
var age;


  Auth.currentAuthenticatedUser().then((user) => {
    username = user.username;
    email = user.attributes.email;
  });

  const saveBio = (bioText) => {
    Storage.put("bio.txt", bioText, {
      contentType: "plain/text"
    })
  }

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


export default function Wireframe(props) {
  const { overrides, ...rest } = props;

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
      <Link to="/myProfile">
        <Button
          border="none"
          fontFamily="HelveticaNeue-Light"
          position="absolute"
          top="246.77px"
          left="52px"
          fontWeight="300"
          padding="0px 0px 0px 0px"
          color="#3d74f5"
          children="publish changes"
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
      >
        <Text
          padding="0px 32px"
          lineHeight="24px"
          textAlign="Center"
          fontFamily="HelveticaNeue-Light"
          fontSize="24px"
          fontWeight="500"
          color="white"
          children="Gender"
        ></Text>
        <Select1
        onChange={event => saveGender(event)}
        defaultValue={gender}>
        <option value="" hidden>Not specified</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </Select1>
      </View>
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
        <Select1
        onChange={event => saveHeight(event)}
        defaultValue={height}>
        <option value="" hidden>Not specified</option>
        <option value="5' or shorter">5' or shorter</option>
        <option value="5'1">5'1</option>
        <option value="5'2">5'2</option>
        <option value="5'3">5'3</option>
        <option value="5'4">5'4</option>
        <option value="5'5">5'5</option>
        <option value="5'6">5'6</option>
        <option value="5'7">5'7</option>
        <option value="5'8">5'8</option>
        <option value="5'9">5'9</option>
        <option value="5'10">5'10</option>
        <option value="5'11">5'11</option>
        <option value="6'">6'</option>
        <option value="6'1">6'1</option>
        <option value="6'2">6'2</option>
        <option value="6'3">6'3</option>
        <option value="6'4">6'4</option>
        <option value="6'5">6'5</option>
        <option value="6'6">6'6</option>
        <option value="6'7">6'7</option>
        <option value="6'8">6'8</option>
        <option value="6'9">6'9</option>
        <option value="6'10">6'10</option>
        <option value="6'11">6'11</option>
        <option value="7' or taller">7' or taller</option>
        </Select1>
      </View>
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
        <Select1
        onChange={event => saveWeight(event)}
        defaultValue={weight}>
        <option value="" hidden>Not specified</option>
        <option value="100lbs or less">100lbs or less</option>
        <option value="105lbs">105lbs</option>
        <option value="110lbs">110lbs</option>
        <option value="115lbs">115lbs</option>
        <option value="120lbs">120lbs</option>
        <option value="125lbs">125lbs</option>
        <option value="130lbs">130lbs</option>
        <option value="135lbs">135lbs</option>
        <option value="140lbs">140lbs</option>
        <option value="145lbs">145lbs</option>
        <option value="150lbs">150lbs</option>
        <option value="155lbs">155lbs</option>
        <option value="160lbs">160lbs</option>
        <option value="165lbs">165lbs</option>
        <option value="170lbs">170lbs</option>
        <option value="175lbs">175lbs</option>
        <option value="180lbs">180lbs</option>
        <option value="185lbs">185lbs</option>
        <option value="190lbs">190lbs</option>
        <option value="195lbs">195lbs</option>
        <option value="200lbs">200lbs</option>
        <option value="205lbs">205lbs</option>
        <option value="210lbs">210lbs</option>
        <option value="215lbs">215lbs</option>
        <option value="220lbs">220lbs</option>
        <option value="225lbs">225lbs</option>
        <option value="230lbs">230lbs</option>
        <option value="235lbs">235lbs</option>
        <option value="240lbs">240lbs</option>
        <option value="245lbs">245lbs</option>
        <option value="250lbs">250lbs</option>
        <option value="255lbs">255lbs</option>
        <option value="260lbs">260lbs</option>
        <option value="265lbs">265lbs</option>
        <option value="270lbs">270lbs</option>
        <option value="275lbs">275lbs</option>
        <option value="280lbs">280lbs</option>
        <option value="285lbs">285lbs</option>
        <option value="290lbs">290lbs</option>
        <option value="295lbs">295lbs</option>
        <option value="300lbs or heavier">300lbs or heavier</option>
        </Select1>
      </View>
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
        <Select1
        onChange={event => saveAge(event)}
        defaultValue={age}>
        <option value="" hidden>Not specified</option>
        <option value="10 or younger">10 or younger</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40 or older">40 or older</option>
        </Select1>
      </View>
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
      >
        <TextField
        border="2px SOLID rgba(196,196,196,0.8)"
        placeholder="All About You!"
        fontFamily="HelveticaNeue-Light"
        lineHeight="28px"
        color="white"
        position="relative"
        textAlign="left"
        top="65px"
        width="570px"
        padding="0px 10px 0px 10px"
        isMultiline={true}
        maxLength={500}
        defaultValue={bioText}
        onChange={(e) => newBio = e.currentTarget.value}
        outerEndComponent={<Button2 
          onClick={() => saveBio(newBio)}
          children="save"/>}
        ></TextField>
      </View>
      <View
        width="62.73px"
        height="28.78px"
        position="absolute"
        top="502px"
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
        top="608px"
        left="929.46px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "Rectangle 34")}
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
        width="251.65px"
        height="32.47px"
        position="absolute"
        top="500px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="#C4C4C4"
        borderRadius="2px"
        {...getOverrideProps(overrides, "Rectangle 38")}
      >
        <TextField
        border="none"
        borderRadius="2px"
        placeholder="Enter your Team 1"
        fontFamily="HelveticaNeue-Light"
        lineHeight="20px"
        color="black"
        position="relative"
        textAlign="left"
        top="-8px"
        width="250px"
        height="32.47px"
        padding="0px 0px 0px 0px"
        isMultiline={false}
        maxLength={50}
        defaultValue={team1}
        onChange={(e) => newTeam1 = e.currentTarget.value}
        outerEndComponent={<Button3 
          onClick={() => saveTeam1(newTeam1)}
          children="save"/>}
        ></TextField>
        <SelectField
        placeholder="Team Type"
        size="small"
        position= "relative"
        left="275px"
        bottom="50px"
        width="120px"
        fontFamily="HelveticaNeue-Light"
        lineHeight="20px"
        borderRadius="2px"
        border="none"
        padding="0px 0px 0px 0px"
        onChange={event => saveTeamType1(event)}
        defaultValue={teamType1}
        >
        <option value="LittleLeague">Little League</option>
        <option value="JrHigh">Jr High</option>
        <option value="HighSchool">High School</option>
        <option value="Collegiate">Collegiate</option>
        <option value="Independent">Independent</option>
        <option value="Professional">Professional</option>
        <option value="Recreational">Recreational</option>
        <option value="Club">Club Ball</option>
        </SelectField>
      </View>
      <View
        width="251.65px"
        height="32.47px"
        position="absolute"
        top="606px"
        left="422.47px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,0.8)"
        {...getOverrideProps(overrides, "Rectangle 39")}
      >
        <TextField
        border="none"
        borderRadius="2px"
        placeholder="Enter your Team 2"
        fontFamily="HelveticaNeue-Light"
        lineHeight="20px"
        color="black"
        position="relative"
        textAlign="left"
        top="-8px"
        width="250px"
        height="32.47px"
        padding="0px 0px 0px 0px"
        isMultiline={false}
        maxLength={50}
        defaultValue={team2}
        onChange={(e) => newTeam2 = e.currentTarget.value}
        outerEndComponent={<Button3 
          onClick={() => saveTeam2(newTeam2)}
          children="save"/>}
        ></TextField>
        <SelectField
        placeholder="Team Type"
        size="small"
        position= "relative"
        left="275px"
        bottom="50px"
        width="120px"
        fontFamily="HelveticaNeue-Light"
        lineHeight="20px"
        borderRadius="2px"
        border="none"
        padding="0px 0px 0px 0px"
        onChange={event => saveTeamType2(event)}
        defaultValue={teamType2}
        >
        <option value="LittleLeague">Little League</option>
        <option value="JrHigh">Jr High</option>
        <option value="HighSchool">High School</option>
        <option value="Collegiate">Collegiate</option>
        <option value="Independent">Independent</option>
        <option value="Professional">Professional</option>
        <option value="Recreational">Recreational</option>
        <option value="Club">Club Ball</option>
        </SelectField>
      </View>
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
