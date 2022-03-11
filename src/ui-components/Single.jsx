/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Prompt from "./Prompt";
import ResponseIcons from "./ResponseIcons";
import InputOptionEditor from "./InputOptionEditor";
import InputOptionAdd from "./InputOptionAdd";
import { View } from "@aws-amplify/ui-react";
export default function Single(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="403px"
      height="125px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Single")}
    >
      <Prompt
        position="absolute"
        top="0px"
        left="-16px"
        {...getOverrideProps(overrides, "Prompt")}
      ></Prompt>
      <ResponseIcons
        position="absolute"
        top="37px"
        left="-24px"
        {...getOverrideProps(overrides, "Response Icons")}
      ></ResponseIcons>
      <InputOptionEditor
        position="absolute"
        top="37px"
        left="0px"
        {...getOverrideProps(overrides, "Input/Option/Editortkd")}
      ></InputOptionEditor>
      <InputOptionEditor
        position="absolute"
        top="37px"
        left="129px"
        {...getOverrideProps(overrides, "Input/Option/Editoryyc")}
      ></InputOptionEditor>
      <InputOptionEditor
        position="absolute"
        top="37px"
        left="258px"
        {...getOverrideProps(overrides, "Input/Option/Editorkpg")}
      ></InputOptionEditor>
      <InputOptionAdd
        position="absolute"
        top="85px"
        left="0px"
        {...getOverrideProps(overrides, "Input/Option/Add")}
      ></InputOptionAdd>
    </View>
  );
}
