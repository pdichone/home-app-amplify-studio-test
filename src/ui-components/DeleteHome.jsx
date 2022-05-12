/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
export default function DeleteHome(props) {
  const { home, overrides, ...rest } = props;
  const buttonThreeOneSevenThreeTwoSixSevenZeroOnClick =
    useDataStoreDeleteAction({ id: home?.id, model: Home, schema: schema });
  return (
    <Flex
      gap="0"
      direction="column"
      width="683px"
      height="178px"
      justifyContent="center"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DeleteHome")}
    >
      <Flex
        gap="0"
        direction="row"
        width="683px"
        height="163px"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="25px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="635px"
          grow="1"
          basis="635px"
          height="141px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Delete Home?"
            {...getOverrideProps(overrides, "Title")}
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
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="This action cannot be undone.  Are you sure you want to delete this home?"
            {...getOverrideProps(overrides, "Paragraph")}
          ></Text>
          <View
            width="635px"
            height="65px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 418")}
          >
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="37px"
              left="-1px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px"
              size="small"
              isDisabled={false}
              variation="default"
              children="Cancel"
              {...getOverrideProps(overrides, "Button31732676")}
            ></Button>
            <Button
              display="flex"
              gap="0"
              position="absolute"
              top="37px"
              left="470px"
              direction="row"
              width="166px"
              justifyContent="center"
              alignItems="center"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px"
              size="small"
              isDisabled={false}
              variation="default"
              children="Confirm Delete"
              onClick={() => {
                buttonThreeOneSevenThreeTwoSixSevenZeroOnClick();
              }}
              {...getOverrideProps(overrides, "Button31732670")}
            ></Button>
          </View>
        </Flex>
      </Flex>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
