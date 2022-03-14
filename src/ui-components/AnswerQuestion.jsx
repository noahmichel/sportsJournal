/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View, Image, Button, RadioGroupField, Radio } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";

export default function AnswerQuestion(props) {
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

  const bestGame = () => {
      Storage.put("userInfo.json", '{"performance":"Best Game"}', {
        contentType: "application/json"
      })
  }

  const goodGame = () => {
    Storage.put("userInfo.json", '{"performance":"Good Game"}', {
      contentType: "application/json"
    })
}

const averageGame = () => {
  Storage.put("userInfo.json", '{"performance":"Average Game"}', {
    contentType: "application/json"
  })
}

const poorGame = () => {
  Storage.put("userInfo.json", '{"performance":"Poor Game"}', {
    contentType: "application/json"
  })
}

const worstGame = () => {
  Storage.put("userInfo.json", '{"performance":"Worst Game"}', {
    contentType: "application/json"
  })
}

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
        children="How did you play today?"
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
      top="275px"
      left="575px"
      >
        <Radio type="radio" value="best game" onClick={bestGame}>Best Game</Radio>
        <Radio type="radio" value="good" onClick={goodGame}>Good</Radio>
        <Radio type="radio" value="average" onClick={averageGame}>Average</Radio>
        <Radio type="radio" value="poor" onClick={poorGame}>Poor</Radio>
        <Radio type="radio" value="worst game" onClick={worstGame}>Worst Game</Radio>
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
        children="Fill out how you you felt you played today."
        {...getOverrideProps(
          overrides,
          "Fill out how you you felt you played today."
        )}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="18px"
        fontWeight="300"
        color="white"
        lineHeight="38.671875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="100px"
        left="1000px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Question 1/5"
        {...getOverrideProps(overrides, "Question 1/5")}
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
      <Button
        fontFamily="HelveticaNeue-Light"
        fontSize="25px"
        fontWeight="300"
        color="#cccccc"
        lineHeight="25.78125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        border="none"
        position="absolute"
        top="526px"
        left="1050px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        // onClick={Storage.put("userInfo.json",  {
        //   contentType: "application/json"
        // })}
        children="Next"
        {...getOverrideProps(overrides, "Next")}
      ></Button>
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
        top="25px"
        left="25px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Beginners Journal"
        {...getOverrideProps(overrides, "Beginners Journal")}
      ></Text>
      <Text
        fontFamily="HelveticaNeue-Light"
        fontSize="25px"
        fontWeight="300"
        color="#cccccc"
        lineHeight="23.4375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="526px"
        left="85px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Exit"
        {...getOverrideProps(overrides, "Exit")}
      ></Text>
    </View>
  );
}
