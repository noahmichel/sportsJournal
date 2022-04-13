import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
import Amplify, { Analytics, Auth, Storage, Hub } from "aws-amplify";

var username = "";
Auth.currentAuthenticatedUser().then((user) => {
    username = user.username;
  });

export default function Classof2021(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="612px"
      height="792px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(210,210,210,1)"
      {...rest}
      {...getOverrideProps(overrides, "Classof2021")}
    >
      <Image
        width="140px"
        height="152px"
        position="absolute"
        top="101px"
        left="59px"
        borderRadius="2px"
        border="4px SOLID rgba(0,0,0,1)"
        backgroundColor="rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 13")}
      ></Image>
      <Image
        width="141px"
        height="152px"
        position="absolute"
        top="101px"
        left="235px"
        borderRadius="2px"
        border="4px SOLID rgba(0,0,0,1)"
        backgroundColor="rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 16")}
      ></Image>
      <View
        width="140px"
        height="152px"
        position="absolute"
        top="330px"
        left="59px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 18")}
      ></View>
      <Image
        width="141px"
        height="152px"
        position="absolute"
        top="330px"
        left="59px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        backgroundColor="rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 25")}
      ></Image>
      <View
        width="140px"
        height="152px"
        position="absolute"
        top="330px"
        left="235px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 24")}
      ></View>
      <Image
        width="132px"
        height="144px"
        position="absolute"
        top="334px"
        left="239px"
        backgroundColor="rgba(196,196,196,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></Image>
      <Image
        width="140px"
        height="152px"
        position="absolute"
        top="330px"
        left="412px"
        border="4px SOLID rgba(0,0,0,1)"
        backgroundColor="rgba(196,196,196,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></Image>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="696px"
        left="62px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Robbie Zhuang "
        {...getOverrideProps(overrides, "Robbie Zhuangrik")}
      ></Text>
      <Image
        width="140px"
        height="152px"
        position="absolute"
        top="538px"
        left="59px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        backgroundColor="rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 21")}
      ></Image>
      <Image
        width="140px"
        height="152px"
        position="absolute"
        top="538px"
        left="412px"
        border="4px SOLID rgba(0,0,0,1)"
        backgroundColor="rgba(196,196,196,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 22")}
      ></Image>
      <Image
        width="141px"
        height="152px"
        position="absolute"
        top="538px"
        left="235px"
        border="4px SOLID rgba(0,0,0,1)"
        backgroundColor="rgba(196,196,196,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></Image>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="132px"
        height="43px"
        position="absolute"
        top="696px"
        left="416px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="John Sent "
        {...getOverrideProps(overrides, "Flippy Figma Mascot")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="696px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Richard Liu"
        {...getOverrideProps(overrides, "Richard Liu")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="56.25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        width="517px"
        height="89px"
        position="absolute"
        top="6px"
        left="47px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={username + "'s Team"}
        {...getOverrideProps(overrides, "The Team")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="718px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Collaboration")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="696px"
        left="62px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Robbie Zhuang "
        {...getOverrideProps(overrides, "Robbie Zhuangznq")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="696px"
        left="62px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Robbie Zhuang "
        {...getOverrideProps(overrides, "Robbie Zhuangxfb")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="138px"
        height="21px"
        position="absolute"
        top="718px"
        left="57px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Editor Experience")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="259px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Stephanie Ginovker"
        {...getOverrideProps(overrides, "Stephanie Ginovker")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="281px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Security")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.75px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="259px"
        left="62px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Zaya Battogtokh"
        {...getOverrideProps(overrides, "Zaya Battogtokh")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="281px"
        left="62px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Editor Platform")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="178px"
        height="21px"
        position="absolute"
        top="488px"
        left="392px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Alfonso Santacruz"
        {...getOverrideProps(overrides, "Alfonso Santacruz")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="510px"
        left="416px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Growth")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="140px"
        height="21px"
        position="absolute"
        top="259px"
        left="408px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Manuka Stratta"
        {...getOverrideProps(overrides, "Manuka Stratta")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="281px"
        left="412px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Prototyping")}
      ></Text>
      <Image
        width="140px"
        height="152px"
        position="absolute"
        top="101px"
        left="413px"
        border="4px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        backgroundColor="rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IMG_1025 1")}
      ></Image>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="488px"
        left="63px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Isaiah Turner"
        {...getOverrideProps(overrides, "Isaiah Turner")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="488px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Levi Villarreal"
        {...getOverrideProps(overrides, "Levi Villarreal")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="510px"
        left="63px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Infrastructure")}
      ></Text>
      <Text
        fontFamily="Abel"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="133px"
        height="21px"
        position="absolute"
        top="510px"
        left="239px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Position: "
        {...getOverrideProps(overrides, "SWE | Native")}
      ></Text>
    </View>
  );
}
