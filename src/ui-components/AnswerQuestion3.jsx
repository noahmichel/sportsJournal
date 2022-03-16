/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {Children, useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View, Image, RadioGroupField } from "@aws-amplify/ui-react";
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
  left: 975px;
  display: flex;
  text-align: center;
  font-weight: 500;

  transition: all 0.2s ease-in;

   &:hover {
    color: Lightgreen;
   }
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  color: white;
  display: flex;
  align-items: center;
  height: 34px;
  position: relative;
  border-radius: 2px;
  margin-bottom: 0px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  text-align: center;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border: 1px SOLID black;
  border-radius: 50%;
  background: #cccccc;
  
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      font-family: "HelveticaNeue";
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
      }
  }
  &:checked + ${Item} {
    background: lawngreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: #3d74f5;
    border: 1px solid black;
  }
`;

export default function AnswerQuestion3(props) {
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
      Storage.get("baseball.jpg", {
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


const bestGame = async () => {
  const result = await Storage.get(today + "begUserInfo.txt", { contentType: 'text/plain', download: true });

  // data.Body is a Blob
  result.Body.text().then(string => { 
      Storage.put(today + "begUserInfo.txt", string + "\nmotivation: locked in", {
          contentType: "plain/text"
        })
});
}

const goodGame = async () => {
  const result = await Storage.get(today + "begUserInfo.txt", { contentType: 'text/plain', download: true });

  // data.Body is a Blob
  result.Body.text().then(string => { 
      Storage.put(today + "begUserInfo.txt", string + "\nmotivation: good motivation", {
          contentType: "plain/text"
        })
});
}

const averageGame = async () => {
  const result = await Storage.get(today + "begUserInfo.txt", { contentType: 'text/plain', download: true });

  // data.Body is a Blob
  result.Body.text().then(string => { 
      Storage.put(today + "begUserInfo.txt", string + "\nmotivation: average motivation", {
          contentType: "plain/text"
        })
});
}

const poorGame = async () => {
  const result = await Storage.get(today + "begUserInfo.txt", { contentType: 'text/plain', download: true });

  // data.Body is a Blob
  result.Body.text().then(string => { 
      Storage.put(today + "begUserInfo.txt", string + "\nmotivation: low motivation", {
          contentType: "plain/text"
        })
});
}

const worstGame = async () => {
  const result = await Storage.get(today + "begUserInfo.txt", { contentType: 'text/plain', download: true });

  // data.Body is a Blob
  result.Body.text().then(string => { 
      Storage.put(today + "begUserInfo.txt", string + "\nmotivation: no motivation", {
          contentType: "plain/text"
        })
});
}

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
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="100px"
        left="75px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="What was your motivation level today?"
        {...getOverrideProps(overrides, "How did you play today?")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="145px"
        left="80px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Answer the question below"
        {...getOverrideProps(overrides, "Answer the question below")}
      ></Text>
      <RadioGroupField 
      name="Performance"
      size="large"
      position="absolute"
      top="260px"
      left="555px"
      >
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="best"
          checked={select === "best"}
          onChange={event => handleSelectChange(event)}
          onClick={bestGame}
        />
        <RadioButtonLabel/>
        <div>Locked In</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="good"
          checked={select === "good"}
          onChange={event => handleSelectChange(event)}
          onClick={goodGame}
        />
        <RadioButtonLabel />
        <div>Positive Motivation</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="average"
          checked={select === "average"}
          onChange={event => handleSelectChange(event)}
          onClick={averageGame}
        />
        <RadioButtonLabel />
        <div>Average Motivation</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="poor"
          checked={select === "poor"}
          onChange={event => handleSelectChange(event)}
          onClick={poorGame}
        />
        <RadioButtonLabel />
        <div>Low Motivation</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="worst"
          checked={select === "worst"}
          onChange={event => handleSelectChange(event)}
          onClick={worstGame}
        />
        <RadioButtonLabel />
        <div>No Motivation</div>
      </Item>
    </Wrapper>

        {/* <Radio type="radio" value="best game" onClick={bestGame}>Best Game</Radio>
        <Radio type="radio" value="good" onClick={goodGame}>Good</Radio>
        <Radio type="radio" value="average" onClick={averageGame}>Average</Radio>
        <Radio type="radio" value="poor" onClick={poorGame}>Poor</Radio>
        <Radio type="radio" value="worst game" onClick={worstGame}>Worst Game</Radio> */}
      </RadioGroupField>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        lineHeight="26.953125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="230px"
        left="575px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Choose answer"
        {...getOverrideProps(overrides, "Choose answer")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue"
        fontSize="24px"
        fontWeight="500"
        color="white"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="200px"
        left="575px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Fill out how motivated you were today."
        {...getOverrideProps(
          overrides,
          "Fill out how you you felt you played today."
        )}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="20px"
        fontWeight="300"
        color="white"
        lineHeight="38.671875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="100px"
        left="1025px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Question 3/5"
        {...getOverrideProps(overrides, "Question 3/5")}
      ></Text>
      <Image
        width="450px"
        height="270px"
        position="absolute"
        top="200px"
        left="75px"
        boxShadow="0px 15px 40px rgba(0.9291666746139526, 0.9291666746139526, 0.9291666746139526, 1)"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="black"
        src={image}
        {...getOverrideProps(overrides, "Rectangle 274")}
      ></Image>
      <Link to="/journal/beginner4" style={{textDecoration: 'none'}}>
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
      <Link to="/journal/beginner2" style={{textDecoration: 'none'}}>
        <Button3
          children="Previous"
          {...getOverrideProps(overrides, "Exit")}
        ></Button3>
      </Link>
      <Button4
        children="Submit"
        onClick={()=>{ alert('Information Recorded: Success'); }}
        {...getOverrideProps(overrides, "Exit")}
      ></Button4>
    </View>
  );
}
