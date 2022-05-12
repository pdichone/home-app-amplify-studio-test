/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="266px"
      height="182px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="133px"
        left="46px"
        direction="row"
        width="180px"
        justifyContent="space-between"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Primary Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="283px"
        height="72px"
        position="absolute"
        top="calc(50% - 36px - 16px)"
        left="94px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Home"
        {...getOverrideProps(overrides, "My Home")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="116px"
        height="24px"
        position="absolute"
        top="100px"
        left="78px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="description"
        {...getOverrideProps(overrides, "description")}
      ></Text>
    </View>
  );
}
